import { config } from '../config.module.js';
import { FetchClass } from '../lib/FetchClass.js';

async function createCard(data) {
    return await new FetchClass(`${config.base_url}/cards`)
        .make('POST')
        .send(data);
}

async function update(id, data) {
    delete data['card-id'];

    return await new FetchClass(`${config.base_url}/cards/${id}`)
        .make('PATCH')
        .send(data);
}

async function destroy(id) {
    return await new FetchClass(`${config.base_url}/cards/${id}`)
        .make('DELETE')
        .send();
}

export { createCard, update, destroy };
