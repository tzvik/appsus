import { utilService } from '../../../services/util-service.js';
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
    console.log('add ping', keep)
    const { inpt, curType } = keep
    const keepToAdd = {
        id: utilService.makeId(),
        isPinned: true,
        type: curType,
        info: {
            title: "note 3",
            txt: inpt,
            label: "a text",
        },
        style: {
            backgroundColor: "#00d"
        },
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
            id: 1,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "Fullstack Me Baby!",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 2,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 3,
            isPinned: false,
            type: "NoteTodos",
            info: {
                title: "note 3",
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 4,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "Fullstack Me Baby!",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 5,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "Fullstack Me Baby!",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 6,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "Fullstack Me Baby!",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 7,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "How many programmers does it take to screw in a light bulb? None, it's a hardware problem.",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 8,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "What is a programmer's favorite hangout place? Foo bar...",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 9,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "Definition, Algorithm: Word used by programmers when they do not want to explain what they did.",
                label: "a text",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 10,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 11,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 12,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 13,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Solar_sys8.jpg",
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: 14,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8b82dbd7fe9677e9218686a427ea6d7&auto=format&fit=crop&w=1350&q=80",
            },
            style: {
                backgroundColor: "#00d"
            }
        },

    ];
    return keeps;
}