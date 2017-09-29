/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.5e8e3e98-6660-48c6-a67d-8a240332d2d4';

const SKILL_NAME = 'Random MMA Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'Jon Jones used to go by the nickname Sexual Chocolate',
    'The Fertitta brothers bought the UFC in two-thousand-one for two million dollars, and sold the UFC in two-thousand-sixteen for approximately four billion dollars.',
    'Ex-champion Frankie Edgar tried out for the Ultimate Fighter and did not make it.',
    'Ex-champion Benson Henderson tried out for the Ultimate Fighter and did not make it.',
    'A double knockout occurred at the eight second mark at a venue called the eight second saloon',
    'Demetrious Johnsons coach Matt Hume threatened to beat up UFC president Dana White during contract negotiations.',
    'Ex-UFC Champions, BJ Penn and Chuck Liddell, made their MMA debuts in the UFC.',
    'Fighter Matt Brown was pronounced clinically dead after a drug overdose, his nickname is the immortal for that reason.',
    'Alex Caseras participated in paid backyard street fights.',
    'Mark Munoz beat Chael Sonnen in a college wrestling match.',
    'Chris Weidman was the two-thousand-three New York State Arm Wrestling Champion.',
    'Kevin Kimbo Slice has two sons named Kevin, a daughter named Kevina, and another son named Kev-lar.',
    'George Saint Pierre lost to flying arm bar when participating in ADCC.',
    'First UFC event outside the United States was in Puerto Rico.',
    'Alexander Gustafsson served fifteen months in prison for aggrevated assault.',
    'Frank Meer was a bouncer at a strip club, where he later met his future wife.',
    'After some punishment and winning his fight by rear naked choke, Joe Doerksen thought he was still married to his ex-wife.',
    'Kevin Randallman slipped during his warm up to fight Pedro Hiz-zo and knocked himself out, the fight was cancelled.',
    'George Saint Pierre gives each one of his UFC belts away to someone close to him.',
    'Dana White gave Lee-o-to Machida a bonus out of his own pocket for beating Tito Ortiz.',
    'All of Tod Duffeys professional fights have ended in knock out or technical knock out.',
    'The UFC did not allow Quinton Rampage Jackson to wear Reebok in the cage in two-thousand-thirteen. Currently all fighters are required to wear Reebok.',
    'Kenneth Allen has a MMA record of one win and thirty-seven losses.',
    'Yoanna Yunjaycheck has a twin sister.',
    'Michelle Waterson used to be a Hooters waitress.',
    'Fox has been known to spray paint over blood when they have events on their network.',
    'Alex-c Olynik has fourty-one wins by submission, and eleven of those are by Ezekiel Choke.',
    'Sixty-two year old Wayne Smallwood beat a twenty-four year old by TKO in two-thousand-seven',
    'Anthony Pettis used to be a firefighter, current UFC heavyweight champion Steepay Meochick is still a firefighter.',
    'Yoel Romero has six wins in the third round by KO or TKO.',
    'Steve Boss-a has three recorded knockouts in his hockey career.',
    'Ex-kickboxing champion, Alister Overeem, has thirteen submission wins, all in under two minutes of the fight.',
    'Benson Henderson took a fight with Rustam Khabilov in two-thousand-fourteen, thinking he was Khabeeb Nurma-go-maydav.',
    'The UFC octagon is based on the first Conan the Barbarian film which features Conan fighting in a stone octagon.',
    'Fabricio Werdooms fastest win was over Fedor Emealienenko in sixty-nine seconds.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function() {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function() {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function() {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};