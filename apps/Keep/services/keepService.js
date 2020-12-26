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
                backgroundColor: "#ffa500"
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
                    { id: 1, txt: "Finish Sprint", doneAt: null },
                    { id: 2, txt: "Work on lists", doneAt: 187111111 },
                    { id: 3, txt: " Complete Actions", doneAt: 187111111 }
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
                txt: "YESSSSS!",
                label: "a text",
            },
            style: {
                backgroundColor: "#ffa500"
            }
        }, {
            id: 5,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif",
            },
            style: {
                backgroundColor: "#f08080"
            }
        }
        , {
            id: 6,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "What is a programmer's favorite hangout place? Foo bar...",
                label: "a text",
            },
            style: {
                backgroundColor: "#ffa500"
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
                backgroundColor: "#ffa500"
            }
        },
        {
            id: 8,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://img.mako.co.il/2016/06/04/Eretz13_14_06_i.jpg",
            },
            style: {
                backgroundColor: "#f08080"
            }
        }
        ,
        {
            id: 9,
            isPinned: false,
            type: "NoteTodos",
            info: {
                title: "note 3",
                label: "How was it:",
                todos: [
                    { id: 1, txt: "finish", doneAt: null },
                    { id: 2, txt: "eat pancakes", doneAt: 187111111 },
                    { id: 3, txt: "foot massage", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#00d"
            }
        },

        {
            id: 10,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "Something important",
                label: "a text",
            },
            style: {
                backgroundColor: "#ffa500"
            }
        },
        {
            id: 11,
            isPinned: false,
            type: "NoteTodos",
            info: {
                title: "note 3",
                label: "How was it:",
                todos: [
                    { id: 1, txt: "finish", doneAt: null },
                    { id: 2, txt: "eat pancakes", doneAt: 187111111 },
                    { id: 3, txt: "foot massage", doneAt: 187111111 }
                ]
            },
            style: {
                backgroundColor: "#f08080"
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
                backgroundColor: "#f08080"
            }
        },
        {
            id: 13,
            isPinned: false,
            type: "NoteImg",
            info: {
                title: "Me playing Mi",
                label: "an image",
                url: "https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg",
            },
            style: {
                backgroundColor: "#f08080"
            }
        },
        {
            id: 14,
            isPinned: true,
            type: "NoteText",
            info: {
                title: "note 3",
                txt: "כמעט שבת שלום גם לכם!",
                label: "a text",
            },
            style: {
                backgroundColor: "#ffa500"
            }
        },

    ];
    return keeps;
}