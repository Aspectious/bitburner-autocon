/*

// AUTOCON Server "Virus" Primary Execution File
© IAN Studios 2021, All rights unreserved.

This code is free. take it.

For use in AUTOCON pacakge. Edits to file may cause corruption or large errors.

IDK why i wrote all of that

How the code works:

Step 1: Scan all servers at current depth (TODO: Remove owned server from list for convinence)
Step 2: Test every server to see if it is viable for attack
Step 2.1: If server can be nuked, or made viable for attack, run nuke or hack system
Step 3: Upload all files requried for efficient attack
Step 4: Run scripts
Step 5: ???
Step 6: Profit

The goal of true efficiency can be made by simply lowering the security of the server- Once low enough,
Hacking and weakening will take less and less.

Theoretically.

*/

// Control System
export async function main(ns) {

	// Await user confirmation
	var usr_confirmed = await ns.prompt("Would you like to run the AUTOCON server virus?");
	if (usr_confirmed == false) {
		await ns.prompt("Cancelling run of AUTOCON");
		return;
	}

	//Get valid list of all servers and narrow them down to the ones that are hackable.
	await connect("home"); // Ensures you are at root

	var srvlst = new Array()
	srvlst = await ns.scan();
	
}