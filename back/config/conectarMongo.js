<<<<<<< HEAD
import mongoose from 'mongoose'

const conectarMongo = async () => {

    try {
        await mongoose.connect(process.env.URI_REMOTA)
        //await mongoose.connect(process.env.URI_REMOTA)
        console.log('Conexión a Mongo realizada con éxito!')
    } catch (error) {
        console.log('Error al conectar a Mongo DB', error)
    }
}
=======
import mongoose from 'mongoose'

const conectarMongo = async () => {

    try {
        await mongoose.connect(process.env.URI_REMOTA)
        //await mongoose.connect(process.env.URI_REMOTA)
        console.log('Conexión a Mongo realizada con éxito!')
    } catch (error) {
        console.log('Error al conectar a Mongo DB', error)
    }
}
>>>>>>> d207792c8bd3057dfe29902addbdd504c3322ce1
export default conectarMongo