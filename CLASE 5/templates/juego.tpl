{include file="header.tpl"}
      <div class="row">
        <div class="col-md-8 col-xs-8 col-lg-8">
          <div class="card recomm">
            <h5 class="card-title recommtitle"> {$juego["nombre"]} <small> ({$categoria["nombre"]})</small></h5>
            <p class="line">____________________________________________________</p>
              <div class="card-body">
              {foreach from=$juego['imagenes'] key=index item=imagen}
      <img src="{$imagen['path']}" alt="Juego{$juego['nombre']}"  class="img-thumbnail">
      {/foreach}

              <div class="buttons">
                <button class="hvr-grow-shadow btn btn-dark button disabled">Comprar</button>
                <a href="https://afranco92.github.io/Interfaces/TPEntregable4/"><button class="hvr-grow-shadow btn btn-dark button">Jugar</button></a>
                <button class="hvr-grow-shadow btn btn-dark button">Descargar</button>
              </div>
              </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-4 col-lg-4">
          <div class="card lastplayed">
            <h5 class="card-title lastplayedtitle">TOP 5</h5>
            <p class="lastplayedline">_______________________________</p>
            <div class="card-body">
              <ul class="list-group lastplayedlist">
                <li class="list-group-item dark top5li"><img class="atinyimg" src="images/vegetta.png">  Vegetta</li>
                <li class="list-group-item semidark top5li"><img class="atinyimg" src="images/venomist.png">  VenoMist</li>
                <li class="list-group-item dark top5li"><img class="atinyimg" src="images/juanpe.png">  Juanpe</li>
                <li class="list-group-item semidark top5li"><img class="atinyimg" src="images/kirito.png">  Kirito</li>
                <li class="list-group-item dark top5li"><img class="atinyimg" src="images/balrogam.png">  Balgoram</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row bla">
        <div class="col-lg-12 col-md-12 col-xs-12">
          <div class="card desc">
            <div class="btn-group btn-group-toggle buttonsgroup" data-toggle="buttons">
              <button class="hvr-float-shadow btn btn-secondary active todescrip">
                <input type="radio" name="options" id="option1" autocomplete="off" checked> Descripción
              </button>
              <button class="hvr-float-shadow  btn btn-secondary tohelp">
                <input type="radio" name="options" id="option2" autocomplete="off"> Ayuda
              </button>
              <button class="hvr-float-shadow btn btn-secondary tocomment">
                <input type="radio" name="options" id="option3" autocomplete="off"> Comentarios
                {if isset($usuario)}
     <div class="row">
      <div class="col-md-12">
          <h1>Agregar Comentario</h1>

            <form method="POST" class="agregarComentario" >
                  <input type="hidden" name="id_juego" value="{$juego["id_juego"]}" class="id_juego">
                  <input type="hidden" name="id_usuario" value="{$usuario}">
                  <div class="form-group form-inline">
                    <label>Puntaje</label>
                    <select class="form-control" name="puntaje" placeholder="Seleccione un numero de puntaje">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Comentario</label>
                    <textarea class="form-control" rows="3" name="comentario" placeholder="Escriba un comentario"></textarea>
                  </div>
                  <button type="submit" class="btn btn-default">Comentar</button>
                </form>
          </div>
        </div>
      {/if}
              </button>
            </div>
            <div class="card-body bottomcontainer"data-spy="scroll" data-target=".comentarios" data-offset="50">
              <p>
                {$juego["descripcion"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    {include file="footer.tpl"}


