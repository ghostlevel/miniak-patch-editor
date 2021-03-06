/**
 * Output the absolute path to a file that stores the following
 * user defaults:
 *
 * Absolute path to patches folder
 * MIDI input port
 * MIDI output port
 */
autowatch    = 1;   
outlets      = 1;
const LOOKUP = 0;
setoutletassist(LOOKUP, "Location of text file used to store/recall user defined defaults");

function bang()
{
    if (0 == max.isruntime) {
        var patchesFolderPath = this.patcher.parentpatcher.filepath;
        var topLevelPatchName = this.patcher.parentpatcher.name;
        patchesFolderPath  = patchesFolderPath.replace(topLevelPatchName + '.maxpat', '');
        outlet (LOOKUP, patchesFolderPath + '/miniakEditorUserDefaults.txt');
        return;
    }

    if (max.os == "windows") {
        outlet (LOOKUP, max.apppath + "/support/miniakEditorUserDefaults.txt");
        return;
    }
    
    if (max.os == "macintosh") {
        var topLevelPatchName = this.patcher.parentpatcher.parentpatcher.name;
        outlet (LOOKUP, max.apppath + "/" + topLevelPatchName + ".app/Contents/support/miniakEditorUserDefaults.txt");
    }
} 