var howToUse = document.getElementById("howToUse");

var observerButton = document.getElementById("observerButton");
var deciderButton = document.getElementById("deciderButton");
var OiButton = document.getElementById("OiButton");
var OeButton = document.getElementById("OeButton");
var DiButton = document.getElementById("DiButton");
var DeButton = document.getElementById("DeButton");
var sButton = document.getElementById("sButton");
var nButton = document.getElementById("nButton");
var fButton = document.getElementById("fButton");
var tButton = document.getElementById("tButton");
var sfButton = document.getElementById("sfButton");
var stButton = document.getElementById("stButton");
var nfButton = document.getElementById("nfButton");
var ntButton = document.getElementById("ntButton");
var seButton = document.getElementById("seButton");
var neButton = document.getElementById("neButton");
var siButton = document.getElementById("siButton");
var niButton = document.getElementById("niButton");
var fiButton = document.getElementById("fiButton");
var tiButton = document.getElementById("tiButton");
var feButton = document.getElementById("feButton");
var teButton = document.getElementById("teButton");
var sleepButton = document.getElementById("sleepButton");
var playButton = document.getElementById("playButton");
var consumeButton = document.getElementById("consumeButton");
var blastButton = document.getElementById("blastButton");
var csButton = document.getElementById("csButton");
var sbButton = document.getElementById("sbButton");
var cpButton = document.getElementById("cpButton");
var bpButton = document.getElementById("bpButton");
var infoButton = document.getElementById("cbButton");
var energyButton = document.getElementById("spButton");
var fSenseButton = document.getElementById("fSenseButton");
var mSenseButton = document.getElementById("mSenseButton");
var fDeButton = document.getElementById("fDeButton");
var mDeButton = document.getElementById("mDeButton");


var observers = document.getElementsByClassName("observer");
var deciders = document.getElementsByClassName("decider");
var control = document.getElementsByClassName("oi");
var chaos = document.getElementsByClassName("oe");
var self = document.getElementsByClassName("di");
var tribe = document.getElementsByClassName("de");
var control2 = document.getElementsByClassName("oi2");
var chaos2 = document.getElementsByClassName("oe2");
var self2 = document.getElementsByClassName("di2");
var tribe2 = document.getElementsByClassName("de2");
var sensor = document.getElementsByClassName("s");
var iNtuitive = document.getElementsByClassName("n");
var feeler = document.getElementsByClassName("f");
var thinker = document.getElementsByClassName("t");
var consumeSleep = document.getElementsByClassName("cs");
var sleepBlast = document.getElementsByClassName("sb");
var consumePlay = document.getElementsByClassName("cp");
var playBlast = document.getElementsByClassName("pb");
var energyDom = document.getElementsByClassName("i4");
var infoDom = document.getElementsByClassName("e4");
var fSense = document.getElementsByClassName("fSense");
var mSense = document.getElementsByClassName("mSense");
var fDe = document.getElementsByClassName("fDe");
var mDe = document.getElementsByClassName("mDe");

howToUse.addEventListener("click", function() {
	alert("Click on buttons to activate the cross-checks. Double-click to deactivate the cross-checks. Take plenty of notes!");
}) 


function crossCheckFunction(button1, data, data2, data3, data4) {
button1.addEventListener("click", function() {
	for (i=0; i < data.length; i++) {
	data[i].classList.add("textOpaque");
	}
	for (i=0; i < data2.length; i++) {
	data2[i].classList.add("textOpaque");
	}
	for (i=0; i < data3.length; i++) {
	data3[i].classList.add("textOpaque");
	}
	for (i=0; i < data4.length; i++) {
	data4[i].classList.add("textOpaque");
	}
})
}

function undoCrossCheckFunction(button1, data, data2, data3, data4) {
button1.addEventListener("dblclick", function() {
	for (i=0; i < data.length; i++) {
	data[i].classList.remove("textOpaque");
	}
	for (i=0; i < data2.length; i++) {
	data2[i].classList.remove("textOpaque");
	}
	for (i=0; i < data3.length; i++) {
	data3[i].classList.remove("textOpaque");
	}
	for (i=0; i < data4.length; i++) {
	data4[i].classList.remove("textOpaque");
	}
})
}

function buttonDisableFunction(onButton, offButton, offButton2, offButton3, offButton4, offButton5, offButton6, offButton7, offButton8, offButton9, offButton10, offButton11, offButton12) {
	onButton.addEventListener("click", function() {
		offButton.classList.add("buttonDisable");
		offButton2.classList.add("buttonDisable");
		offButton3.classList.add("buttonDisable");
		offButton4.classList.add("buttonDisable");
		offButton5.classList.add("buttonDisable");
		offButton6.classList.add("buttonDisable");
		offButton7.classList.add("buttonDisable");
		offButton8.classList.add("buttonDisable");
		offButton9.classList.add("buttonDisable");
		offButton10.classList.add("buttonDisable");
		offButton11.classList.add("buttonDisable");
		offButton12.classList.add("buttonDisable");
	})
}

function undoButtonDisableFunction(onButton, offButton, offButton2, offButton3, offButton4, offButton5, offButton6, offButton7, offButton8, offButton9, offButton10, offButton11, offButton12) {
	onButton.addEventListener("dblclick", function() {
		offButton.classList.remove("buttonDisable");
		offButton2.classList.remove("buttonDisable");
		offButton3.classList.remove("buttonDisable");
		offButton4.classList.remove("buttonDisable");
		offButton5.classList.remove("buttonDisable");
		offButton6.classList.remove("buttonDisable");
		offButton7.classList.remove("buttonDisable");
		offButton8.classList.remove("buttonDisable");
		offButton9.classList.remove("buttonDisable");
		offButton10.classList.remove("buttonDisable");
		offButton11.classList.remove("buttonDisable");
		offButton12.classList.remove("buttonDisable");
	})
}

crossCheckFunction(observerButton, deciders);
crossCheckFunction(deciderButton, observers);
crossCheckFunction(OiButton, chaos, chaos2);
crossCheckFunction(OeButton, control, control2);
crossCheckFunction(DiButton, tribe, tribe2);
crossCheckFunction(DeButton, self, self2);
crossCheckFunction(sButton, iNtuitive);
crossCheckFunction(nButton, sensor);
crossCheckFunction(fButton, thinker);
crossCheckFunction(tButton, feeler);
crossCheckFunction(sfButton, iNtuitive, thinker);
crossCheckFunction(stButton, iNtuitive, feeler);
crossCheckFunction(nfButton, sensor, thinker);
crossCheckFunction(ntButton, sensor, feeler);
crossCheckFunction(seButton, control, control2, iNtuitive);
crossCheckFunction(neButton, control, control2, sensor);
crossCheckFunction(siButton, chaos, chaos2, iNtuitive);
crossCheckFunction(niButton, chaos, chaos2, sensor);
crossCheckFunction(fiButton, tribe, tribe2, thinker);
crossCheckFunction(tiButton, tribe, tribe2, feeler);
crossCheckFunction(feButton, self, self2, thinker);
crossCheckFunction(teButton, self, self2, feeler);
crossCheckFunction(sleepButton, chaos, chaos2, tribe, tribe2);
crossCheckFunction(playButton, control, control2, self, self2);
crossCheckFunction(consumeButton, control, control2, tribe, tribe2);
crossCheckFunction(blastButton, chaos, chaos2, self, self2);
crossCheckFunction(csButton, consumePlay, sleepBlast, playBlast);
crossCheckFunction(sbButton, consumeSleep, consumePlay, playBlast);
crossCheckFunction(cpButton, consumeSleep, sleepBlast, playBlast);
crossCheckFunction(bpButton, consumeSleep, consumePlay,sleepBlast);
crossCheckFunction(infoButton, energyDom);
crossCheckFunction(energyButton, infoDom);
crossCheckFunction(fSenseButton, mSense);
crossCheckFunction(mSenseButton, fSense);
crossCheckFunction(fDeButton, mDe);
crossCheckFunction(mDeButton, fDe);

undoCrossCheckFunction(observerButton, deciders);
undoCrossCheckFunction(deciderButton, observers);
undoCrossCheckFunction(OiButton, chaos, chaos2);
undoCrossCheckFunction(OeButton, control, control2);
undoCrossCheckFunction(DiButton, tribe, tribe2);
undoCrossCheckFunction(DeButton, self, self2);
undoCrossCheckFunction(sButton, iNtuitive);
undoCrossCheckFunction(nButton, sensor);
undoCrossCheckFunction(fButton, thinker);
undoCrossCheckFunction(tButton, feeler);
undoCrossCheckFunction(sfButton, iNtuitive, thinker);
undoCrossCheckFunction(stButton, iNtuitive, feeler);
undoCrossCheckFunction(nfButton, sensor, thinker);
undoCrossCheckFunction(ntButton, sensor, feeler);
undoCrossCheckFunction(seButton, control, control2, iNtuitive);
undoCrossCheckFunction(neButton, control, control2, sensor);
undoCrossCheckFunction(siButton, chaos, chaos2, iNtuitive);
undoCrossCheckFunction(niButton, chaos, chaos2, sensor);
undoCrossCheckFunction(fiButton, tribe, tribe2, thinker);
undoCrossCheckFunction(tiButton, tribe, tribe2, feeler);
undoCrossCheckFunction(feButton, self, self2, thinker);
undoCrossCheckFunction(teButton, self, self2, feeler);
undoCrossCheckFunction(sleepButton, chaos, chaos2, tribe, tribe2);
undoCrossCheckFunction(playButton, control, control2, self, self2);
undoCrossCheckFunction(consumeButton, control, control2, tribe, tribe2);
undoCrossCheckFunction(blastButton, chaos, chaos2, self, self2);
undoCrossCheckFunction(csButton, consumePlay, sleepBlast, playBlast);
undoCrossCheckFunction(sbButton, consumeSleep, consumePlay, playBlast);
undoCrossCheckFunction(cpButton, consumeSleep, sleepBlast, playBlast);
undoCrossCheckFunction(bpButton, consumeSleep, consumePlay,sleepBlast);
undoCrossCheckFunction(infoButton, energyDom);
undoCrossCheckFunction(energyButton, infoDom);
undoCrossCheckFunction(fSenseButton, mSense);
undoCrossCheckFunction(mSenseButton, fSense);
undoCrossCheckFunction(fDeButton, mDe);
undoCrossCheckFunction(mDeButton, fDe);

buttonDisableFunction(observerButton, deciderButton);
buttonDisableFunction(deciderButton, observerButton);
buttonDisableFunction(OiButton, OeButton, seButton, neButton, playButton, consumeButton, cpButton);
buttonDisableFunction(OeButton, OiButton, siButton, niButton, sleepButton, blastButton,sbButton);
buttonDisableFunction(DiButton, DeButton, feButton, teButton, playButton, blastButton, bpButton);
buttonDisableFunction(DeButton, DiButton, fiButton, tiButton, sleepButton, consumeButton, csButton);
buttonDisableFunction(sButton, nButton, nfButton, ntButton, neButton, niButton);
buttonDisableFunction(nButton, sButton, sfButton, stButton, siButton, seButton);
buttonDisableFunction(fButton, tButton, stButton, ntButton, tiButton, teButton);
buttonDisableFunction(tButton, fButton, sfButton, nfButton, fiButton, feButton);
buttonDisableFunction(sfButton, stButton, nfButton, ntButton, nButton, tButton, neButton, niButton, tiButton, teButton);
buttonDisableFunction(stButton, sfButton, nfButton, ntButton, nButton, fButton, neButton, niButton, fiButton, feButton);
buttonDisableFunction(nfButton, sfButton, stButton, ntButton, sButton, tButton, seButton, siButton, tiButton, teButton);
buttonDisableFunction(ntButton, sfButton, stButton, nfButton, sButton, fButton, seButton, siButton, fiButton, feButton);
buttonDisableFunction(seButton, OiButton, nButton, nfButton, ntButton, neButton, siButton, niButton, sleepButton, blastButton, sbButton);
buttonDisableFunction(neButton, OiButton, sButton, sfButton, stButton, seButton, siButton, niButton, sleepButton, blastButton, sbButton);
buttonDisableFunction(siButton, OeButton, nButton, nfButton, ntButton, seButton, neButton, niButton, playButton, consumeButton, cpButton);
buttonDisableFunction(niButton, OeButton, sButton, sfButton, stButton, seButton, neButton, siButton, playButton, consumeButton, cpButton);
buttonDisableFunction(fiButton, DeButton, tButton, stButton, ntButton, tiButton, feButton, teButton, playButton, blastButton, bpButton);
buttonDisableFunction(tiButton, DeButton, fButton, sfButton, nfButton, fiButton, feButton, teButton, playButton, blastButton, bpButton);
buttonDisableFunction(feButton, DiButton, tButton, stButton, ntButton, fiButton, tiButton, teButton, sleepButton, consumeButton, csButton);
buttonDisableFunction(teButton, DiButton, fButton, sfButton, nfButton, fiButton, tiButton, feButton, sleepButton, consumeButton, csButton);
buttonDisableFunction(sleepButton, playButton, consumeButton, blastButton, OeButton, DeButton, seButton, neButton, feButton, teButton, cpButton, bpButton);
buttonDisableFunction(playButton, sleepButton, consumeButton, blastButton, OiButton, DiButton, siButton, niButton, fiButton, tiButton, csButton, sbButton);
buttonDisableFunction(consumeButton, sleepButton, playButton, blastButton, OiButton, DeButton, siButton, niButton, feButton, teButton, sbButton, bpButton);
buttonDisableFunction(blastButton, sleepButton, playButton, consumeButton, OeButton, DiButton, seButton, neButton, fiButton, tiButton, csButton, cpButton);
buttonDisableFunction(csButton, sbButton, cpButton, bpButton, DeButton, feButton, teButton, playButton, blastButton);
buttonDisableFunction(sbButton, csButton, cpButton, bpButton, OeButton, seButton, neButton, consumeButton, playButton);
buttonDisableFunction(cpButton, csButton, sbButton, bpButton, OiButton, siButton, niButton, sleepButton, blastButton);
buttonDisableFunction(bpButton, csButton, sbButton, cpButton, DiButton, fiButton, tiButton, sleepButton, consumeButton);
buttonDisableFunction(infoButton, energyButton);
buttonDisableFunction(energyButton, infoButton);
buttonDisableFunction(fSenseButton, mSenseButton);
buttonDisableFunction(mSenseButton, fSenseButton);
buttonDisableFunction(fDeButton, mDeButton);
buttonDisableFunction(mDeButton, fDeButton);

undoButtonDisableFunction(observerButton, deciderButton);
undoButtonDisableFunction(deciderButton, observerButton);
undoButtonDisableFunction(OiButton, OeButton, seButton, neButton, playButton, consumeButton, cpButton);
undoButtonDisableFunction(OeButton, OiButton, siButton, niButton, sleepButton, blastButton,sbButton);
undoButtonDisableFunction(DiButton, DeButton, feButton, teButton, playButton, blastButton, bpButton);
undoButtonDisableFunction(DeButton, DiButton, fiButton, tiButton, sleepButton, consumeButton, csButton);
undoButtonDisableFunction(sButton, nButton, nfButton, ntButton, neButton, niButton);
undoButtonDisableFunction(nButton, sButton, sfButton, stButton, siButton, seButton);
undoButtonDisableFunction(fButton, tButton, stButton, ntButton, tiButton, teButton);
undoButtonDisableFunction(tButton, fButton, sfButton, nfButton, fiButton, feButton);
undoButtonDisableFunction(sfButton, stButton, nfButton, ntButton, nButton, tButton, neButton, niButton, tiButton, teButton);
undoButtonDisableFunction(stButton, sfButton, nfButton, ntButton, nButton, fButton, neButton, niButton, fiButton, feButton);
undoButtonDisableFunction(nfButton, sfButton, stButton, ntButton, sButton, tButton, seButton, siButton, tiButton, teButton);
undoButtonDisableFunction(ntButton, sfButton, stButton, nfButton, sButton, fButton, seButton, siButton, fiButton, feButton);
undoButtonDisableFunction(seButton, OiButton, nButton, nfButton, ntButton, neButton, siButton, niButton, sleepButton, blastButton, sbButton);
undoButtonDisableFunction(neButton, OiButton, sButton, sfButton, stButton, seButton, siButton, niButton, sleepButton, blastButton, sbButton);
undoButtonDisableFunction(siButton, OeButton, nButton, nfButton, ntButton, seButton, neButton, niButton, playButton, consumeButton, cpButton);
undoButtonDisableFunction(niButton, OeButton, sButton, sfButton, stButton, seButton, neButton, siButton, playButton, consumeButton, cpButton);
undoButtonDisableFunction(fiButton, DeButton, tButton, stButton, ntButton, tiButton, feButton, teButton, playButton, blastButton, bpButton);
undoButtonDisableFunction(tiButton, DeButton, fButton, sfButton, nfButton, fiButton, feButton, teButton, playButton, blastButton, bpButton);
undoButtonDisableFunction(feButton, DiButton, tButton, stButton, ntButton, fiButton, tiButton, teButton, sleepButton, consumeButton, csButton);
undoButtonDisableFunction(teButton, DiButton, fButton, sfButton, nfButton, fiButton, tiButton, feButton, sleepButton, consumeButton, csButton);
undoButtonDisableFunction(sleepButton, playButton, consumeButton, blastButton, OeButton, DeButton, seButton, neButton, feButton, teButton, cpButton, bpButton);
undoButtonDisableFunction(playButton, sleepButton, consumeButton, blastButton, OiButton, DiButton, siButton, niButton, fiButton, tiButton, csButton, sbButton);
undoButtonDisableFunction(consumeButton, sleepButton, playButton, blastButton, OiButton, DeButton, siButton, niButton, feButton, teButton, sbButton, bpButton);
undoButtonDisableFunction(blastButton, sleepButton, playButton, consumeButton, OeButton, DiButton, seButton, neButton, fiButton, tiButton, csButton, cpButton);
undoButtonDisableFunction(csButton, sbButton, cpButton, bpButton, DeButton, feButton, teButton, playButton, blastButton);
undoButtonDisableFunction(sbButton, csButton, cpButton, bpButton, OeButton, seButton, neButton, consumeButton, playButton);
undoButtonDisableFunction(cpButton, csButton, sbButton, bpButton, OiButton, siButton, niButton, sleepButton, blastButton);
undoButtonDisableFunction(bpButton, csButton, sbButton, cpButton, DiButton, fiButton, tiButton, sleepButton, consumeButton);
undoButtonDisableFunction(infoButton, energyButton);
undoButtonDisableFunction(energyButton, infoButton);
undoButtonDisableFunction(fSenseButton, mSenseButton);
undoButtonDisableFunction(mSenseButton, fSenseButton);
undoButtonDisableFunction(fDeButton, mDeButton);
undoButtonDisableFunction(mDeButton, fDeButton);
