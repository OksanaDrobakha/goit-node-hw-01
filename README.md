# goit-node-hw-01

Ксю@DESKTOP-ULLVTHQ MINGW64 /d/GitHub/goit-node-hw-01 (main)
$ node index.js --action="list"
│ 5 │ 'drsAJ4SHPYqZeG-83QTVW' │ 'Kennedy Lane' │ 'mattis.Cras@nonenimMauris.net' │ '(542) 451-7038' │
│ 6 │ 'Z5sbDlS7pCzNsnAHLtDJd' │ 'Reuben Henry' │ 'pharetra.ut@dictum.co.uk' │ '(715) 598-5792' │
│ 7 │ 'C9sjBfCo4UJCWjzBnOtxl' │ 'Simon Morton' │ 'dui.Fusce.diam@Donec.com' │ '(233) 738-2360' │
│ 8 │ 'e6ywwRe4jcqxXfCZOj_1e' │ 'Thomas Lucas' │ 'nec@Nulla.com' │ '(704) 398-7993' │
│ 9 │ 'vza2RIzNGIwutCVCs4mCL' │ 'Wylie Pope' │ 'est@utquamvel.net' │ '(692) 802-2949' │
└─────────┴─────────────────────────┴─────────────────┴─────────────────────────────────────────────────┴──────────────────┘

Ксю@DESKTOP-ULLVTHQ MINGW64 /d/GitHub/goit-node-hw-01 (main)
$ node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
┌─────────┬─────────────────────────┬─────────────────┬──────────────────────────┬──────────────────┐
│ (index) │ id │ name │ email │ phone │
├─────────┼─────────────────────────┼─────────────────┼──────────────────────────┼──────────────────┤
│ 0 │ '05olLMgyVQdWRwgKfg5J6' │ 'Cyrus Jackson' │ 'nibh@semsempererat.com' │ '(501) 472-5218' │
└─────────┴─────────────────────────┴─────────────────┴──────────────────────────┴──────────────────┘

Ксю@DESKTOP-ULLVTHQ MINGW64 /d/GitHub/goit-node-hw-01 (main)
$ node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
Mango has been added to your contacts

Ксю@DESKTOP-ULLVTHQ MINGW64 /d/GitHub/goit-node-hw-01 (main)
$ node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
Contact with the id qdggE76Jtbfd9eWJHrssH has been removed
