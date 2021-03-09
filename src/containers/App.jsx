import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'

const App = () => {
    return (
        <div className="App">
            <Header />
            <Search />
            <Categories textCategory={'Mi lista'}>
                <Carousel>
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                </Carousel>
            </Categories>

            <Categories textCategory={'Tendencia'}>
                <Carousel>
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                </Carousel>
            </Categories>

            <Categories textCategory={'Originales de platzi video'}>
                <Carousel>
                    <CarouselItem title={'Título descriptivo'} />
                    <CarouselItem title={'Título descriptivo'} />
                </Carousel>
            </Categories>
            <Footer />
        
        </div>
    )
}

export default App
