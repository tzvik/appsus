// import { utilService } from './utilService.js';
import { storageService } from '../../../services/storageService.js';

const KEY = 'keepDB';
export const keepService = {
    query,
    remove,
    save,
    getById,
};
var gKeeps;
_createKeeps();

function _createKeeps() {
    // Try loading from localStorage
    gKeeps = storageService.load(KEY);
    if (!gKeeps || !gKeeps.length) {
        // Nothing in localStorage, use demo data
        gKeeps = _getDemoKeeps()
        _saveKeepsToStorage();
    }
}



function query() {
    return Promise.resolve(gKeeps);
}

function save(keep) {
    if (keep.id) {
        return _update(keep);
    } else {
        return _add(keep);
    }
}

function _add(keep) {
    const keepToAdd = {
        id: utilService.makeId(),
        ...keep
    };
    gKeeps = [keepToAdd, ...gKeeps];
    _saveKeepsToStorage();
    return Promise.resolve(keepToAdd);
}

function _update(keep) {
    const keepToUpdate = {
        ...keep
    };
    const keepsCopy = [...gKeeps];
    const keepIdx = keepsCopy.findIndex(keep => keep.id === keep.id);
    keepsCopy[keepIdx] = keepToUpdate;
    gKeeps = keepsCopy;
    _saveKeepsToStorage();
    return Promise.resolve(keepToUpdate);
}

function remove(keepId) {
    gKeeps = gKeeps.filter(keep => keep.id !== keepId);
    _saveKeepsToStorage();
    return Promise.resolve();
}

function getById(keepId) {
    const keep = gKeeps.find(keep => keep.id === keepId);
    return Promise.resolve(keep);
}

function _saveKeepsToStorage() {
    storageService.save(KEY, gKeeps)
}


function _getDemoKeeps() {
    const keeps = [
        {
            type: "NoteText",
            id: 1,
            isPinned: true,
            info: {
                title:"note 3",
                txt: "Fullstack Me Baby!",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteImg",
            id: 2,
            isPinned: false,
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "http://some-img/me",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteTodos",
            id: 3,
            isPinned: false,
            info: {
                title:"note 3",
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#00d"
            }
        }
    ];
    return keeps;
}