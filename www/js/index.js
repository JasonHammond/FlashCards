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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //    var inFile = 'addition.json';
        //    
        //    var cards = $.getJSON(inFile, function(data) {
        //        console.log(data);
        //        
        //         = data.items.map(function (item) {
        //            return item.key + ': ' + item.value;
        //        });
        //    });
        var cards = [
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
            
        var cardDraw = (function() {
            return function() {return (cards[Math.floor(Math.random() * cards.length)]);}
        })();
    
        var card = cardDraw();
    
        var cardToggle = (function() {
            var toggle = 0;
            return function() {return toggle += 1;}
        })();
         
        $(".flashCard").click(function() {        
            if ((cardToggle() % 2) === 1) {
                document.getElementById('qa').innerHTML = card.question;
            }
            else {
                document.getElementById('qa').innerHTML = card.answer;
                card = cardDraw();
            }
        });
    }
};      
