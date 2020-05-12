import React,{useState, useEffect} from 'react';
import Cards from '../components/Cards';
import Chart from '../components/chart-example';
import TopBy from './TopBy';

const cards = [
    {
        image: 'https://picsum.photos/1000/500',
        name: 'Centro de carga tarango',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/600',
        name: 'Casa-departamentos en las Aguilas',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/650',
        name: 'Hotel dentro de la vanena',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/700',
        name: 'Helipuerto sobre avenida',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/750',
        name: 'Centro de carga tarango',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/800',
        name: 'Casa-departamentos en las Aguilas',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/850',
        name: 'Hotel dentro de la vanena',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/900',
        name: 'Helipuerto sobre avenida',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/950',
        name: 'Centro de carga tarango',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1000',
        name: 'Casa-departamentos en las Aguilas',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1010',
        name: 'Hotel dentro de la vanena',
        year: '2019',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1020',
        name: 'Helipuerto sobre avenida',
        year: '2019',
        type: 'Oficinas administrativas',
        desc: 'La descripcion de la obra'
    },
]
function Home() {
    return (
        <div>
            <Cards cards={cards} />
        </div>
    )
}


export default Home;