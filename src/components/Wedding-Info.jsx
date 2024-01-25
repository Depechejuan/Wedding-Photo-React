function WeddingInfo({wedding}){
    return(
        <>
            <h3>Wedding Info</h3>
            <p>La ID de tu boda es: {wedding.id}</p>
            <p>Próximamente se generará el nuevo QR</p>
        </>
    )
}

export default WeddingInfo