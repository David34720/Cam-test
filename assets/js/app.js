// * Quand on importe avec ESM : on doit préciser l'extension du fichier
import { addListenerToActions } from './utils.module.js';
import { getLists, dragNDropList } from './lists/list.module.js';
import { dragNDropCard } from './cards/card.module.js';
import { addExisitingTagToDom } from './tags/tag.module.js';

async function init() {
    try {
        await getLists();
        await addExisitingTagToDom();
        addListenerToActions();
        dragNDropList();
        dragNDropCard();
    } catch (e) {
        console.log(e);
    }
}

// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener('DOMContentLoaded', init);
