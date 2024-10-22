from flask_cors import CORS
from flask import Flask

#Le decimos que flask correra directamente un servidor local
app = Flask(__name__)

#Asignamos el cors
CORS(app)

#Creamos el endpoint para la obtencion de los datos
@app.route('/getDatos', methods=['GET'])
#Creamos la funcion para los datos
def getDatos():
    #Hardcodeamos los datos
    datos = [
    {
        "id": 1,
        "nombre": "Elemento 1",
        "descripcion": "Descripción del elemento 1"
    },
    {
        "id": 2,
        "nombre": "Elemento 2",
        "descripcion": "Descripción del elemento 2"
    },
    {
        "id": 3,
        "nombre": "Elemento 3",
        "descripcion": "Descripción del elemento 3"
    }]
    #retornamos con un status correcto los datos
    return {'intStatus': 200, 'strAnswer': datos}

#Si no obtenemos ninguna direccion que nos retorne un error
@app.route('/', methods=['GET'])
def empty():
    return {'intStatus': 404, 'strAnswer': "Not found"}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)