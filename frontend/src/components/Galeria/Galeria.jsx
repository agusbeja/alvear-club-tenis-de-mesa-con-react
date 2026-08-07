import './Galeria.css';

const imagenesGaleria = [
    { id: 1, src: "/galeria/imagen1.png", clase: "column-dos-row-dos" },
    { id: 2, src: "/galeria/imagen3.png", clase: "row-dos" },
    { id: 3, src: "/galeria/imagen8.png", clase: "row-dos" },
    { id: 4, src: "/galeria/imagen4.png" },
    { id: 5, src: "/galeria/imagen5.png" },
    { id: 6, src: "/galeria/imagen6.png", clase: "column-dos-row-dos"},
    { id: 7, src: "/galeria/imagen7.png" },
    { id: 8, src: "/galeria/imagen10.png", clase: "row-dos" },
    { id: 9, src: "/galeria/imagen12.png" },
    { id: 10, src: "/galeria/imagen2.png" },
    { id: 11, src: "/galeria/imagen11.png" },
    { id: 12, src: "/galeria/imagen14.png", clase: "display-none"},
    { id: 13, src: "/galeria/imagen13.png", clase: "column-tres-row-dos"}
];

export function Galeria() {
    return (
        <section className='galeria__container'>
            {imagenesGaleria.map((imagen) => (
                <img 
                    key={imagen.id}  
                    src={imagen.src} 
                    alt="imagen-galeria"
                    className={`galeria__img ${imagen.clase || ''}`} 
                    loading='lazy'
                />
            ))}
        </section>
    )
}