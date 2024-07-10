function Cart(){
    return(
        <div className="container-fluid">
    <h1 className="text-center">Catalogue Page</h1>
<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3' style={{ height: '80vh', overflow: 'auto' }} >
 
<div className='col' >
    <div className='card h-300 '>
        <div className='card-body'>
        
        <img className="card-img-top" src="https://th.bing.com/th/id/OIP.AEvkORRwiQaxV6SH_iG3LwHaE8?rs=1&pid=ImgDetMain" alt="Card image cap"/>
        <h5 className='card-title'>Rosemart </h5>
            <h6 className='card-subtitle'>Flower </h6>
            <h6 className='card-subtitle'>800$</h6>
        </div>
        <button className="btn btn-success">Add</button>
    </div>
</div>
<div className='col' >
    <div className='card h-300 '>
        <div className='card-body'>
        <img className="card-img-top" src="https://storage.needpix.com/rsynced_images/fower-2575370_1280.jpg" alt="Card image cap"/>
            <h5 className='card-title'>Rosemart </h5>
            <h6 className='card-subtitle'>Flower </h6>
            <h6 className='card-subtitle'>500$</h6>
        </div>
        <button className="btn btn-success">Add</button>
    </div>
</div>
<div className='col' >
    <div className='card h-300 '>
    
   
        <div className='card-body'>
        <img className="card-img-top" src="https://th.bing.com/th/id/OIP.hxNapldLUVx1Hs9gZHDcjQAAAA?w=474&h=328&rs=1&pid=ImgDetMain" alt="Card image cap"/>
        <h5 className='card-title'>Rosemart </h5>
            <h6 className='card-subtitle'>Flower </h6>
            <h6 className='card-subtitle'>1200$</h6>
        </div>
        <button className="btn btn-success">Add</button>
    </div>
</div>
<div className='col' >
    <div className='card h-300 '>

        <div className='card-body'>
        <img className="card-img-top" src="https://th.bing.com/th/id/OIP.hxNapldLUVx1Hs9gZHDcjQAAAA?w=474&h=328&rs=1&pid=ImgDetMain" alt="Card image cap"/>
        <h5 className='card-title'>Rosemart </h5>
            <h6 className='card-subtitle'>Flower </h6>
            <h6 className='card-subtitle'>600$</h6>
        </div>
        <button className="btn btn-success">Add</button>
    </div>
</div>
</div>
</div>
       
    )
}
export default Cart;

