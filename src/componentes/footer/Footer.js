import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">

<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
        <h5>Conectate con nosotros en nuestras redes:</h5>
    </div>



    <div>
        <a href="http://facebook.com" class="me-4 text-reset" target='_blank'>
        <i class="bi bi-facebook"></i>
        </a>

        <a href="http://twitter.com" class="me-4 text-reset" target='_blank'>
        <i class="bi bi-twitter-x"></i>
        </a>

        <a href="http://linkedin.com" class="me-4 text-reset" target='_blank'>
        <i class="bi bi-linkedin"></i>
        </a>

        <a href="http://github.com" class="me-4 text-reset" target='_blank'>
        <i class="bi bi-github"></i>
        </a>
        
    </div>

</section>



<section class="">
    <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

            



            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                    Productos
                </h6>
                <p>
                    <a href="#!" class="text-reset" target='_blank'>Guias</a>
                </p>
                <p>
                    <a href="#!" class="text-reset" target='_blank'>Tutoriales</a>
                </p>
                <p>
                    <a href="#!" class="text-reset" target='_blank'>Recomendaciones</a>
                </p>
                
            </div>



            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                    Links
                </h6>
                <p>
                    <a href="https://zonacraft.net/mc/shaders/" class="text-reset" target="_blank">More shaders</a>
                </p>
                <p>
                    <a href="https://www.youtube.com/@AsianHalfSquat" class="text-reset" target="_blank">Reviews</a>
                </p>
                <p>
                    <a href="https://www.minecraft.net/en-us" class="text-reset" target="_blank">Minecraft Oficial Site</a>
                </p>
                
            </div>



            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    correo@gmail.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>

        </div>

    </div>
</section>



<div class="text-center p-4" >
    © 2024 Copyright:
  
</div>

</footer>
    </div>
  )
}
