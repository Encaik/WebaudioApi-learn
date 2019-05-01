import Tone from 'tone'

var Start = () => {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "8n");
}

export default Start