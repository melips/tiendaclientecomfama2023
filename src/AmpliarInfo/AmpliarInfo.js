import './AmpliarInfo.css'

export function AmpliarInfo(){

    return(
        <>
            <br></br>
            <br></br>
            <div class="container my-5">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/tomates.webp?alt=media&token=ab114ea8-f487-4e7c-a448-c25040ff228e" 
                            class="img-fluid w-75" 
                            alt="foto" 
                        />
                    </div>
                    <div class="col-12 col-md-5 border p-3 rounded shadow">
                        <h2 class="fw-bold">Tomate Chonto de aliño</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Mas vendido</span>
                        <br></br>
                        <br></br>
                        <h1>$2500</h1>
                        <br></br>
                        <span class="badge text-bg-primary mt-3">Oferton Hipermega promoción</span>
                        <br></br>
                        <p class="text-muted mt-3">Hasta 48 cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/visa.png?alt=media&token=ed35c860-6a04-441a-8d53-c8ef4a809fba" alt="icono" class="img-fluid me-3"/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/tiendadonchucho-2c4fb.appspot.com/o/american-express.png?alt=media&token=8ef11696-0bbf-4714-96b2-a902623f1213" alt="icono" class="img-fluid"/>

                        <br></br>
                        <br></br>
                        <i class="bi bi-truck display-1 my-5"></i>
                        <p>Entregas en Medellin y valle del aburrá </p>

                        <br></br>
                        <br></br>
                        <form>
                            <label class="form-label">Cantidad:</label>
                            <input class="form-control" type="number" value="1"></input>
                            <button type="submit" class="btn btn-warning mt-2 w-100">
                                <i class="bi bi-cart4"></i> añadir
                            </button>
                        </form>

                        
                    </div>
                </div>
            </div>
        </>
    )

}