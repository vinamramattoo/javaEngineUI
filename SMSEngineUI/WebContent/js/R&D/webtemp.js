var count = 0;
function inside(events) {
	for (i in events) {

		if (typeof events[i] === 'object') {
			count++;
			//alert(events[i])
			inside(events[i]);
		} else {

	/*		if (events[i] == "type1")
				alert("count");*/
			alert(events[i]);
			alert("count" + count);
		}
	}
}

var arr1 = [ {
	"type1" : [ {
		"group1" : [ {
			"template1" : [ {
				"retry_count" : 12
			}, {
				"message_expiry_time" : 34
			} ]

		}, {
			"template2" : [ {
				"retry_count" : 10
			}, {
				"message_expiry_time" : 20
			} ]
		} ]
	}, {
		"group2" : [ {
			"template1" : [ {
				"retry_count" : 15
			}, {
				"message_expiry_time" : 13
			} ]
		}, {
			"template2" : [ {
				"retry_count" : 16
			}, {
				"message_expiry_time" : 24
			} ]
		} ]
	} ]
}, {
	"type2" : [ {
		"group1" : [ {
			"template1" : [ {
				"retry_count" : 18
			}, {
				"message_expiry_time" : 40
			} ]

		}, {
			"template2" : [ {
				"retry_count" : 22
			}, {
				"message_expiry_time" : 29
			} ]
		} ]
	}, {
		"group2" : [ {
			"template1" : [ {
				"retry_count" : 6
			}, {
				"message_expiry_time" : 30
			} ]
		}, {
			"template2" : [ {
				"retry_count" : 2
			}, {
				"message_expiry_time" : 11
			} ]
		} ]
	} ]
} ];
inside(arr1);