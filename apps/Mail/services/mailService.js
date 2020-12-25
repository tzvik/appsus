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
        {id:'m101', subject: 'Ani Sone DarDasim/!?', body: 'La la lala lala', isRead: false, sentAt : 1551133930594},
        {id:'m102', subject: 'Come Back And Grow Your Instagram account?', body: 'Pick up2!', isRead: false, sentAt : 1551133930595},
        {id:'m103', subject: 'Meow?', body: 'Pick up3!', isRead: false, sentAt : 1551133930596},
        {id:'m104', subject: 'I WILL KILL YOU TAL /!/!/!/!/!/!/!/!/!/!/!/!/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m105', subject: 'Hey Shmuel', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m106', subject: 'I am your father/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m107', subject: 'When you want to succeed as bad as you want to breathe/, then you’ll be successful.', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m108', subject: 'Bazinga/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m109', subject: 'Pik Pikachu', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m110', subject: 'fuuuuk yo Mon', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m111', subject: 'I LOVE APPLES :O', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m112', subject: 'I DONT GIVE A F***/!/!/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m113', subject: 'lorem ipsum dolor sit amet', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m114', subject: 'What a douchbag', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m115', subject: 'New login to Instagram from Chrome on Windows', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m116', subject: 'Bitdefender Antivirus Plus 2020', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m117', subject: 'on boots/, my boss/, and sending emails', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m118', subject: 'Talmashiah invited you to Talmashiah/Appsus', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m119', subject: '12 items from your Steam wishlist are on sale', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m120', subject: 'Hi Shmuel/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m121', subject: 'Soaring through all the galaxies', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m122', subject: 'Product Review for Order #410107347-0', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m123', subject: 'Reminder: You’re invited to be part of the 2019 State of the Developer Survey', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m124', subject: 'Thundercats are loose', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m125', subject: 'get up stand up', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m126', subject: 'Zuzana from Avocode', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m127', subject: 'SW Application Engineer', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
        {id:'m128', subject: 'How you doin/?', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
    ];
    return mails;
}

// const mails = [
//     {id:'m101', subject: 'Ani Sone DarDasim/!?', body: 'La la lala lala', isRead: false, sentAt : 1551133930594},
//     {id:'m102', subject: 'Come Back And Grow Your Instagram account?', body: 'Pick up2!', isRead: false, sentAt : 1551133930595},
//     {id:'m103', subject: 'Meow?', body: 'Pick up3!', isRead: false, sentAt : 1551133930596},
//     {id:'m104', subject: 'I WILL KILL YOU TAL /!/!/!/!/!/!/!/!/!/!/!/!/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m105', subject: 'Hey Shmuel', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m106', subject: 'I am your father/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m107', subject: 'When you want to succeed as bad as you want to breathe/, then you’ll be successful.', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m108', subject: 'Bazinga/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m109', subject: 'Pik Pikachu', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m110', subject: 'fuuuuk yo Mon', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m111', subject: 'I LOVE APPLES :O', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m112', subject: 'I DONT GIVE A F***/!/!/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m113', subject: 'lorem ipsum dolor sit amet', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m114', subject: 'What a douchbag', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m115', subject: 'New login to Instagram from Chrome on Windows', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m116', subject: 'Bitdefender Antivirus Plus 2020', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m117', subject: 'on boots/, my boss/, and sending emails', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m118', subject: 'Talmashiah invited you to Talmashiah/Appsus', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m119', subject: '12 items from your Steam wishlist are on sale', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m120', subject: 'Hi Shmuel/!', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m121', subject: 'Soaring through all the galaxies', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m122', subject: 'Product Review for Order #410107347-0', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m123', subject: 'Reminder: You’re invited to be part of the 2019 State of the Developer Survey', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m124', subject: 'Thundercats are loose', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m125', subject: 'get up stand up', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m126', subject: 'Zuzana from Avocode', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m127', subject: 'SW Application Engineer', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
//     {id:'m128', subject: 'How you doin/?', body: 'Pick up4!', isRead: false, sentAt : 1551133930597},
// ];