{if isset($juegos)}
<div class="bs-example"><i>
	hol
      <ul>
        {foreach from=$juegos item=juego}
         <li class="list-group-item semidark">{$juego["nombre"]} - {$categoria["nombre"]}
          <a class="juego" data-id="{$juego['id_juego']}" href="mostrar_juego&id_juego={$juego['id_juego']}">Ver mas</a>
        </li>
        {/foreach}
      </ul>
</i></div>
{/if}
