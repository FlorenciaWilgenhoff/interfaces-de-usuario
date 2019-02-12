{include file="header.tpl"}
<div class="container">

  <h5 class="card-title recommtitle">Listado de Categorias</h5>
  <a href="admin_cat"> <i class="far fa-edit"></i>
  <ul>
    {foreach from=$categorias item=categoria}
    <li class="list-group-item semidark">{$categoria["nombre"]}</li>
    {/foreach}
  </ul>

  <h5 class="card-title recommtitle">Listado de Juegos</h5>
  <a href="admin_juegos"><i class="far fa-edit"></i>

  <ul> 
    {foreach from=$categorias item=categoria}
      {foreach from=$juegos item=juego}
      {if $juego["fk_id_categoria"] == $categoria["id_categoria"]}
        <li class="list-group-item semidark">{$juego["nombre"]} - {$categoria["nombre"]}
          <a class="juego" data-id="{$juego['id_juego']}" href="mostrar_juego&id_juego={$juego['id_juego']}">Ver mas</a>
        </li>
      {/if}
      {/foreach}
    {/foreach}
  </ul>
<div class="bs_example">
<h5 class="card-title recommtitle">Filtrado de categorias</h5>
   <select class="form-control filtro semidark" name="categoria">
        <option selected>Elija categoría</option>
        {foreach from=$categorias item=categoria}
        <option value="{$categoria["id_categoria"]}">{$categoria["nombre"]}</option>
        {/foreach}
    </select>
    <div class="mostrarFiltro"></div>
  </div>

</div>


{include file="footer.tpl"}
