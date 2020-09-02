/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../list/list.scss';
import { Accordion, Input, Button, TextArea } from 'chayns-components/lib';

function Formular() {
    const [website, setWebsite] = useState('');
    const [firstName, setFirstName] = useState(chayns.env.user.firstName);
    const [lastName, setLastName] = useState(chayns.env.user.lastName);
    const [eMail, setEmail] = useState('');
    const [annotation, setAnnotation] = useState('');
    function sending() {
        if (website === '' || firstName === '' || lastName === '' || eMail === '') {
            chayns.dialog.alert('Bitte fülle alle Pflichtfelder aus!');
        } else {
            chayns.intercom.sendMessageToPage({
                text: `Empfohlende Website: ${website}
                        Name: ${firstName} ${lastName}
                        Email: ${eMail}
                        Anmerkung: ${annotation}`,
            }).then((data) => {
                if (data.status === 200) {
                    chayns.dialog.alert(`Danke für deine Empfehlung, ${chayns.env.user.firstName}!`);
                }
            });
        }
    }
    function checkForLogin() {
        if (chayns.env.user.isAuthenticated) {
            sending();
        } else {
            chayns.addAccessTokenChangeListener(() => {
                sending();
            });
            chayns.login();
        }
    }

    return (
        <Accordion className="accordionRecommendation" head="Deine Empfehlung">
            <div className="accordion__content">
                <div className="facts">
                    <Input id="website" type="text" placeholder="Website" value={website} onChange={setWebsite} required dynamic/>
                    <Input id="firstName" type="text" placeholder="Vorname" value={firstName} onChange={setFirstName} required dynamic/>
                    <Input id="lastName" type="text" placeholder="Nachname" value={lastName} onChange={setLastName} required dynamic/>
                    <Input id="eMail" type="text" placeholder="eMail" value={eMail} onChange={setEmail} required dynamic/>
                    <TextArea id="annotation" type="text" placeholder="Anmerkung" value={annotation} onChange={setAnnotation} autogrow/>
                </div>
                <div className="sending">
                    <Button className="button" onClick={() => { checkForLogin(); }}>Abschicken</Button>
                </div>
            </div>
        </Accordion>
    );
}
export default Formular;
