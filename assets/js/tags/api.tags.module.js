import { config } from '../config.module.js';
import { FetchClass } from '../lib/FetchClass.js';

async function getTags() {
    return await new FetchClass(`${config.base_url}/tags`).make().send();
}

async function createTag(formData) {
    return await new FetchClass(`${config.base_url}/tags`)
        .make('POST')
        .send(formData);
}

async function associate(formData) {
    const url = `cards/${formData.card_id}/tags/${formData.tag_id}`;

    return await new FetchClass(`${config.base_url}/${url}`)
        .make('PATCH')
        .send(formData);
}

async function disassociate(cardId, tagId) {
    return await new FetchClass(
        `${config.base_url}/cards/${cardId}/tags/${tagId}`
    )
        .make('DELETE')
        .send();
}

async function destroyTag(tagId) {
    return await new FetchClass(`${config.base_url}/tags/${tagId}`)
        .make('DELETE')
        .send();
}

export { getTags, associate, disassociate, createTag, destroyTag };
