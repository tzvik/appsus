import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storageService.js';

const KEY = 'mailDB';
export const mailService = {
    query,
    remove,
    save
    // getById,
};
var gMails;
_createMails();

function _createMails() {
    // Try loading from localStorage
    gMails = storageService.load(KEY);
    if (!gMails || !gMails.length) {
        // Nothing in localStorage, use demo data
        gMails = _getDemoMails()
        _saveMailsToStorage();
    }
}



function query() {
    return Promise.resolve(gMails);
}

function save(mail) {
    // if (mail.id) {
    //     return _update(mail);
    // } else {
        return _add(mail);
    // }
}

function _add(mail) {
    const mailToAdd = {
        id: utilService.makeId(),
        ...mail
    };
    console.log(mailToAdd);
    gMails = [mailToAdd, ...gMails];
    _saveMailsToStorage();
    return Promise.resolve(mailToAdd); 

}

// function _update(mail) {
//     const mailToUpdate = {
//         ...mail
//     };
//     const mailsCopy = [...gMails];
//     const mailIdx = mailsCopy.findIndex(mail => mail.id === mail.id);
//     mailsCopy[mailIdx] = mailToUpdate;
//     gMails = mailsCopy;
//     _saveMailsToStorage();
//     return Promise.resolve(mailToUpdate);
// }

function remove(mailId) {
    gMails = gMails.filter(mail => mail.id !== mailId);
    _saveMailsToStorage();
    return Promise.resolve();
}

// function getById(mailId) {
//     const mail = gMails.find(mail => mail.id === mailId);
//     return Promise.resolve(mail);
// }

function _saveMailsToStorage() {
    storageService.save(KEY, gMails)
}


function _getDemoMails() {
    const mails = [
        {id:'m101', subject: 'Ani Sone DarDasim/!?', body: 'Pick up1!', isRead: false, sentAt : 1551133930594},
        {id:'m102', subject: 'Come Back And Grow Your Instagram account?', body: 'Pick up2!', isRead: false, sentAt : 1551133930595},
        {id:'m103', subject: 'Wassap3?', body: 'Pick up3!', isRead: false, sentAt : 1551133930596},
        {id:'m104', subject: 'Wassap4?', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
    ];
    return mails;
}