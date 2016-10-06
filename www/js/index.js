/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var cardToggle;
var card;
var cards;

$('#frontpage').bind('pageshow', function(event) {
    cardToggle = 0;
    cardDraw();
});

function cardDraw() {
    console.log('drawing card...');
    cards = [
        {question:"2+2=?", answer:"4"},
        {question:"3+9=?", answer:"12"},
        {question:"2+7=?", answer:"9"},
        {question:"1+4=?", answer:"5"},
        {question:"5+8=?", answer:"13"},
        {question:"6+1=?", answer:"7"},
        {question:"6+5=?", answer:"11"},
        {question:"4+8=?", answer:"12"},
        {question:"3+0=?", answer:"3"},
        {question:"0+0=?", answer:"0"},
        {question:"3-2=?", answer:"1"},
        {question:"5-2=?", answer:"3"},
        {question:"6-1=?", answer:"5"},
        {question:"8-6=?", answer:"2"},
        {question:"13-5=?", answer:"8"},
        {question:"8-1=?", answer:"7"},
        {question:"12-3=?", answer:"9"},
        {question:"17-5=?", answer:"12"},
        {question:"3-0=?", answer:"3"},
        {question:"0-0=?", answer:"0"} ];

    card = (cards[Math.floor(Math.random() * cards.length)]);
};
    
$('#frontpage').ready(function() {
    $('#qa').bind('tap', function() {        
        if ((cardToggle % 2) === 0) {
            $(this).html(card.question);
            cardToggle += 1;
        }
        else {
            $(this).html(card.answer);
            cardDraw();
            cardToggle += 1;
        }
    });
});
