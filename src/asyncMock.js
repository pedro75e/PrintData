const products = [
    {
        id: '1',
        name: 'Multifunción Epson EcoTank L4260',
        price: 125000.00,
        category: 'Multifunción',
        img: 'https://mediaserver.goepson.com/ImConvServlet/imconv/0b6b6f6b5bccbd9b2a89b0b1117c730e3bcab3a1/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=20Lio2_MBL_blk_01',
        stock: 21,
        description: 'Impresora multifunción, ideal para el hogar y la oficina'
    },
    { id:'2', name: 'Impresora Multifuncional Epson EcoTank L8160', price: 2, category: '', img: 'https://mediaserver.goepson.com/ImConvServlet/imconv/c29e5ce6f86f6956089e43758347bb23e792fc37/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=foto-EcoTank-8160-1', stock: 2, description: ''},
    { id:'3', name: 'Impresora Multifuncional EcoTank L3210', price: 2, category: '', img: 'https://mediaserver.goepson.com/ImConvServlet/imconv/5eb479d75a3c57ad2e6cd8f4363fe7326a4aa778/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=EcoTank-L3210-690x460-1', stock: 2, description: ''},
    { id:'4', name: 'Impresora HP LaserJet Pro MFP 4103fdw', price: 2, category: '', img: 'https://d34vmoxq6ylzee.cloudfront.net/catalog/product/2/Z/2Z629A-1_T1685390707.png', stock: 2, description: ''},
    { id:'5', name: 'Impresora Láser Monocromática HP M107A - USB', price: 2, category: '', img: 'https://www.portalinsumos.com.ar/wp-content/uploads/2020/11/Impresora-Laser-Monocromatica-HP-M107w-Wifi-portal-insumos-alsina.jpg', stock: 2, description: ''}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getproductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}




