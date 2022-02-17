/*

// AUTOCON Server "Virus" Primary Execution File
© IAN Studios 2021, All rights unreserved.

This code is free. take it.

For use in AUTOCON pacakge. Edits to file may cause corruption or large errors.

IDK why i wrote all of that

*/

// Control System
export async function main(ns) {

	// Await user confirmation
	var usr_confirmed = await ns.prompt("Would you like to run the AUTOCON server virus? WARNING: SERVERS YOU OWN WILL HAVE FILES ADDED TO THEM. TO PREVENT THIS, ADD THEIR HOSTNAMES IN THE [srv_blacklist] ARRAY IN THE /AUTOCON/main.js FILE!");
	if (usr_confirmed == false) {
		ns.toast("AUTOCON Main System Run Cancelled","error")
		return;
	}




	// Var used for Blacklisting Servers
	// E.G. ["Home","darkweb","serverhostname1","serverhostname2"]
	//
	var srv_blacklist = ["home","darkweb"];
	//
	//





	var i = 0;
	var srvlst = new Array()
	srvlst = await ns.scan();
    

	// Information directed towards user.
	// Pro tip: 250 ms in sleep time is almost perfect for preventing the main toast from being flooded out.
	//
    ns.toast("Releasing AUTOCON Virus.","warning",10000);

    while (i!=srvlst.length) {
		var srv = srvlst[i];
        ns.toast(`Scan Discovered Server ${srv}`,"info")
		await ns.sleep(250);

		if (srv_blacklist.includes(srv)) {
			ns.toast(`Server ${srv} Blocked from being infected by Blacklist`,"success")
			await ns.sleep(250);
		} else {

			// Logic Breakdown (ooh spooky);
			//
			// Phase 1: Checks
			//	- Check if server has AUTOCON pre-installed. If so, cancel.
			//	- Check if player meets minimum requirement for running code on server. If not, cancel, and add to event log.
			//
			//	- The Special Check - Check depth level of current server compared to the main depth counter, so if bot gets stuck, we push it back up.
			//
			//
			// Phase 2: The fun part
			//	- Uplaod all viral information to server
			//	- Run Phase 1 one final time to ensure success; if failed, print an error.
			//	- Upload Control File (./host.js)
			//
			// Phase 3: Profit
			//	- Triple check that all servers available are fully operational
			//	- Run each Server Control file to run scripts
			//	- Run each Server Control file to spread Virus deeper and deeper. 
			//	- Await message from each Control File to return, ending the script and releasing lots of debug info

			



		}
		
		// End Cycle
        i=i+1;
    }

}