import React,{useState, useEffect} from 'react';
import Cards from '../components/Cards';
import Chart from '../components/chart-example';
import TopBy from './TopBy';

const cards = [
    {
        image: 'https://s27389.pcdn.co/wp-content/uploads/2019/12/top-5-data-science-strategy-predictions-2020-1024x440.jpeg',
        name: 'Top apps by reviews',
        path: 'top-by-user-rating',
        type: 'app',
        y: 'reviews',
        desc: 'Aquí podrás observar el comportamiento de las apps en relación a las calificaciones que obtienen por los usuarios'
    },
    {
        image: 'https://picsum.photos/1000/600',
        name: 'Top category by installs',
        path: 'top-category-by-installs',
        type: 'category',
        y: 'downloads',
        desc: 'Aquí podrás observar el la relación entre la categoría de las apps con la cantidad de descargas obtenidas en la PlayStore'
    },
    {
        image: 'https://picsum.photos/1000/650',
        name: 'Hotel dentro de la vanena',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/700',
        name: 'Helipuerto sobre avenida',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/750',
        name: 'Centro de carga tarango',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://logolab.io/assets/img/cool-logo-ideas-2019/optimised/yuri-kartashev.jpeg',
        name: ' ',
        path: ' ',
        type: ' ',
        desc: ' '
    },
    {
        image: 'https://www.xda-developers.com/files/2019/05/play-store-1.jpg',
        name: ' ',
        path: ' ',
        type: ' ',
        desc: ' '
    },
    {
        image: 'https://picsum.photos/1000/900',
        name: 'Helipuerto sobre avenida',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/950',
        name: 'Centro de carga tarango',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1000',
        name: 'Casa-departamentos en las Aguilas',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1010',
        name: 'Hotel dentro de la vanena',
        path: 'best-price-by-gender',
        type: 'Vivienda',
        desc: 'La descripcion de la obra'
    },
    {
        image: 'https://picsum.photos/1000/1020',
        name: 'Helipuerto sobre avenida',
        path: 'best-price-by-gender',
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