const { response } = require ('express');
const Evento = require('../models/Event.model');


const getEventos = async (req, res=response) => {

    const eventos = await Evento.find()
                                .populate('user', 'name');

    return res.status(200).json({
        ok:true,
        eventos
    });
    
}

const crearEvento = async (req, res=response) => {

    const evento = new Evento ( req.body );
    try {

        evento.user = req.uid;

        // evento.user.uid = uid;
        // evento.user.name = name;
        const e = await evento.save();

        res.status(201).json({
            ok:true,
            evento: e
        });


    } catch (error) {
        console.log(error)
        res.status(500).json ({
            ok:false,
            msg: 'hubo un error'
        });
    }
}

const actualizarEvento = async (req, res=response) => {

    const eventoId = req.params.id;
    const {uid} = req;

    try {

        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json ({
                ok:false,
                msg: 'no existe el id'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json ({
                ok:false,
                msg: 'no puedes cambiar la nota'
            });
        }
        
        const nuevoEvento = {
            ...req.body,
            user: uid
        };

        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, {new: true} );
        res.status(200).json ({
            ok:true,
            evento: eventoActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json ({
            ok:false,
            msg: 'hubo un error'
        });
    }

    
}

const eliminarEvento = async (req, res=response) => {

    const eventoId = req.params.id;
    const {uid} = req;

    try {

        const evento = await Evento.findById(eventoId);

        if (!evento) {
            return res.status(404).json ({
                ok:false,
                msg: 'no existe el id'
            });
        }

        if ( evento.user.toString() !== uid ) {
            return res.status(401).json ({
                ok:false,
                msg: 'no puedes borrar la nota'
            });
        }

        await Evento.findByIdAndRemove( eventoId );
        res.status(200).json ({
            ok:true,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json ({
            ok:false,
            msg: 'hubo un error'
        });
    }











    
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}