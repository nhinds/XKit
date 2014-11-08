//* TITLE One-Click Postage **//
//* VERSION 3.4 REV A **//
//* DESCRIPTION Lets you easily reblog, draft and queue posts **//
//* DEVELOPER STUDIOXENIX **//
//* FRAME false **//
//* BETA false **//

XKit.extensions.one_click_postage = new Object({

	running: false,

	qq_icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzgxMzAzQzIwRDZGMTFFM0IyOTBDRDZCRDY3Qzk1QTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzgxMzAzQzMwRDZGMTFFM0IyOTBDRDZCRDY3Qzk1QTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODEzMDNDMDBENkYxMUUzQjI5MENENkJENjdDOTVBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODEzMDNDMTBENkYxMUUzQjI5MENENkJENjdDOTVBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpK36AkAAAFxSURBVHjalJSxS8NAFMZzJruuhSBCdHMISIcWhw4OAZfO/hHSySmFblnF2cH/wA6CDg5Oujg4dHJRUGinklWo1O/kO3h5Hkl88OOSd+++vHv3cma9XgfajDE9DEegD/ZBB8zBDDyCe6x7+rPQijlgCSjAwk7VsGBcUlkvhLrgukFEY+O7FTFmpIVeQQZiEHLM6NeCiRQrVEAe1Fuu4gtX+56qkRY6B8/gUNU3VzW0OsFYbU3bDeeOlVigtjze4PE7Ow3+ZzK+H7GPnM08CwzHXfTfAZ/fwFLF/+qsRKqhR+zO0xInnAuFbxWxs2NO2k7/VGJnYBt8gW/6liLe2VxnsQO25N/RYJnI7NY5U/AuJh6saAuxymk6pxUqwRCMOHnVIObts5SOiQi0mZU1Yt4/IBI1KkXd7PMm32MWt8PjvwB7QngKLuWX7OIXMOCX7PuUmbW/NWgjT+CkRsx7nxmRXcrMSm59gIAhuv6j7U37I8AABDEAB/datwYAAAAASUVORK5CYII=",
	qq_ok_icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzNGRkUyQzUwRDcwMTFFM0IyOTBDRDZCRDY3Qzk1QTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzNGRkUyQzYwRDcwMTFFM0IyOTBDRDZCRDY3Qzk1QTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODEzMDNDNDBENkYxMUUzQjI5MENENkJENjdDOTVBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3M0ZGRTJDNDBENzAxMUUzQjI5MENENkJENjdDOTVBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkDLUa4AAAG4SURBVHjalJQxSEJRFIafL/fcRNAKrIYSCsJBCWpwqK3WpgQ3IwgiQhKCJBocRBoFp5ptcwiqRYccJNxECgqkpWxsCPov/DdOh6fRgY93733n/Jx77rnXl72YdzwsAVIgCWIgBPqgAxrgGjSN4/lW5yfIr0SiIAPSIKj+hckayIIqqICedXCFcxwUwaGHkLYg/Yo7l7G4FjMZ5cCGCOiCdRDhDiKcd4WP8c9BMCrFMkooD2ZBHbyAL37rXM8rwYwVS7BGUqgg5iXQAstiraAE08gu4fLUgmJrBVWfabAExtV6QWzZxKdcHr+1Xed/Jv2TfvaRtY5HgE9laOwRvCn/mMuGtNb3EBtTtWux17R/yM+FsF3gqUk7ABPgk6fqMCtHJ2L7x9oUCICBWHsAc0Nq9qtEts8WwRNr8Q5uKfqXlcW4YcVqDN4Ee2CFNRplR2CG41dz+V1mNcngGr936kZ4CZ2IeRWvR9MvtjMQdRuIJg3zkEKsUVlkZHdVsU+Qqc8H2AZtcMP5FZ2fR2RohE6RVU9e9GOwQCGHWbVHiJganYF9CN3rx7HEDFe5xQDHDvtu6Esr7VuAAQC+Omj592980QAAAABJRU5ErkJggg==",

	preferences: {
		"sep_-1": {
			text: "Default Blog",
			type: "separator",
		},
		"default_blog": {
			text: "Default blog for One-Click Postage",
			default: "",
			value: "",
			type: "blog",
		},
		"sep_0": {
			text: "Shortcuts",
			type: "separator",
		},
		"enable_keyboard_shortcuts": {
			text: "Use keyboard shortcuts (R/Q/D to reblog/queue/draft, T to tag, escape to close)",
			default: false,
			value: false
		},
		"enable_quick_queue": {
			text: "Enable QuickQueue buttons on posts",
			default: false,
			value: false
		},
		"enable_quick_blog_reblog": {
			text: "Enable QuickReblog and QuickQueue on top right corner when I visit blogs",
			default: false,
			value: false,
			experimental: true
		},
		"sep_5": {
			text: "AlreadyReblogged <a id=\"xkit-alreadyreblogged-help\" href=\"#\" onclick=\"return false\">what is this?</a>",
			type: "separator",
		},
		"enable_alreadyreblogged": {
			text: "Enable AlreadyReblogged for posts I reblog, queue or draft",
			default: false,
			value: false
		},
		"already_reblogged_limit": {
			text: "Remember the last <i>X</i> posts reblogged",
			default: "a3000",
			value: "a3000",
			type: "combo",
			values: [
				"Default (3,000)", "a3000",
				"1,500 Posts", "a1500",
				"1,000 Posts", "a1000",
				"500 Posts", "a500",
				"250 Posts", "a250",
				"4 Posts", "a4",
			],
		},
		"enable_hide_alreadyreblogged": {
			text: "Hide posts if they are AlreadyReblogged on my dashboard",
			default: false,
			value: false
		},
		"sep_1": {
			text: "Popup Options",
			type: "separator",
		},
		"dont_scroll_quicktags": {
			text: "Turn off scrolling on Quick Tags bundles",
			default: false,
			value: false
		},
		"show_blog_selector": {
			text: "Show blog selector",
			default: true,
			value: true
		},
		"enable_popup_html": {
			text: "Enable HTML in One-Click Postage popup",
			default: false,
			value: false
		},
		"show_caption_remover": {
			text: "Show the Remove Caption button",
			default: true,
			value: true
		},
		"show_caption": {
			text: "Show the Caption box",
			default: true,
			value: true
		},
		"show_tag_remover": {
			text: "Show the Clear Tags button",
			default: false,
			value: false
		},
		"show_reverse_ui": {
			text: "Use the Reverse UI on the popup-window (popup on top of reblog button)",
			default: true,
			value: true
		},
		"show_small_ui": {
			text: "Use the Slim User Interface on the pop-up window",
			default: false,
			value: false
		},
		"show_social": {
			text: "Show Post To Facebook and Twitter buttons",
			default: false,
			value: false
		},
		"allow_resize": {
			text: "Allow resizing of the caption box vertically (experimental)",
			default: false,
			value: false
		},
		"sep_2": {
			text: "Notifications",
			type: "separator",
		},
		"dim_posts_after_reblog": {
			text: "Turn the reblog button green after a successful reblog/queue/draft",
			default: true,
			value: true
		},
		"dont_show_notifications": {
			text: "Turn off the notifications displayed when successfully reblogged/queued/drafted",
			default: false,
			value: false
		},
		"sep_3": {
			text: "Tagging options",
			type: "separator",
		}
	},

	already_reblogged: new Array(),
	last_object: new Object(),
	last_icon_object: new Object(),
	last_post_id: 0,
	user_on_box: false,
	menu_closer_int: 0,
	default_blog_id: "",
	caption_height: 90,

	auto_tagger: false,
	auto_tagger_preferences: "",

	quick_tags: false,

	frame_run: function() {

		if (XKit.extensions.one_click_postage.preferences.enable_quick_blog_reblog.value === true) {

			XKit.extensions.one_click_postage.in_blog();

		}

		if (typeof XKit.page.peepr != "undefined" && XKit.page.peepr == true) {
			XKit.extensions.one_click_postage.run();
		}

	},

	in_blog: function() {

		$(".btn").addClass("no_label");

		if ($(".btn.reblog").length === 0) {return; }

		var m_css = 	"#iframe_controls { width: auto !important; } " +
				"#x1cpostage_in_blog_reblog:before {" +
					" background-size: auto; " +
					" background-position: 50% 50%; " +
					" background-repeat: no-repeat; " +
					" background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA2MTUwNUY0MDFBMTFFM0I3QjRGNERGODZCRDlCN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA2MTUwNjA0MDFBMTFFM0I3QjRGNERGODZCRDlCN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MDYxNTA1RDQwMUExMUUzQjdCNEY0REY4NkJEOUI3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MDYxNTA1RTQwMUExMUUzQjdCNEY0REY4NkJEOUI3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuZEKdMAAAD/SURBVHjalJK7CsIwFIbjBd9AUITSqUJ3L4NduklWn8S1z+OjKE5uBSelU+tlU2jpEv8DSakx1fjDR08Oybn1tIQQzFIDkOnONrPXDngfXqrAEtINzOp+ZRyFvZ6AqwCqhTH7T129BdIV9H60cAFTUwtn4IHBlwB90NGTKGMoA5wMD10QgR0o5DeS/irARLYgDI83DcMkv0uXluBhuLCSmSpxzkWapnVXRNPsNCzUFqzJyPOcBUHAsixjZVnW73BV6hzcDS0UKlUcx8JxHJEkSb2CQmXegwVItCoOyvB937QPB33iI+1czYCy09qEYfg2g1/7b/UXbII07sFLgAEAWx1gAHMEnncAAAAASUVORK5CYII=); " +
				"}" +
				"#x1cpostage_in_blog_queue:before {" +
					" background-size: auto; " +
					" background-position: 50% 50%; " +
					" background-repeat: no-repeat; " +
					" background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDZEMUIyMEM0MDFDMTFFM0I3QjRGNERGODZCRDlCN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDZEMUIyMEQ0MDFDMTFFM0I3QjRGNERGODZCRDlCN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MDYxNTA2MTQwMUExMUUzQjdCNEY0REY4NkJEOUI3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MDYxNTA2MjQwMUExMUUzQjdCNEY0REY4NkJEOUI3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmHw4kUAAAErSURBVHjahJKxasMwEIblBNq1tHQyGJduhtLBfoDi2WOH0jxAKd27eMlbhEyBQN+gD+ApU8hS3N2blw7pYLxd/oOTOYQcH3yWdJbu9N8pICKjLAMFeAIP4vsBFfgGe+MaBxDeQE3jVssefcbow0eatqMbhD/ZRGbfTTIbYCaaE6UqAM9m3BI5M9SgcjLMJfpG1gG4dPZUWsKf55rG4Qo8ggsZ37UEn3Vqfgc+wAr8y3gN4jEJ1rbgHnyN/Gd/PJNH4jN+OC/g1TqKojBt29ol+xfn2ngLdjzpuo7SNKUwDKlpGr1nd+4hcfX7ofl1TVEUuQF6W8Q1+AS/jozD0Pwk8ck8uO1iOUsp7A0obSrOzjXP81zfoDSenmviqS5MBbBBSiloL2MpfnMSYADCFn1McDQb3wAAAABJRU5ErkJggg==); " +
				"}" +
				"#x1cpostage_in_blog_draft:before {" +
					" background-size: auto; " +
					" background-position: 50% 50%; " +
					" background-repeat: no-repeat; " +
					" background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjUxMEI2MUU0RjcxMTFFM0E2REZERTA4MTkxRkNEODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODlFMzUxNEU0Rjc4MTFFM0E2REZERTA4MTkxRkNEODEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTEwQjYxQzRGNzExMUUzQTZERkRFMDgxOTFGQ0Q4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNTEwQjYxRDRGNzExMUUzQTZERkRFMDgxOTFGQ0Q4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnBnWXQAAADUSURBVHjapFI7DsMgDMVRLtElypw7sLByJM7Tq2TslgNkCjcIYnGNCqlDoESqpZfnGP+wAUQU/0gXGWsMAPz/In34QPQKaoXFzwT4ucfJ+ZvzECwl7W9WgrszaAkWr9DqgF0H8q01O6CAkWAIM8GRaSYYwpgcimDBTyxLsI8pACsJDI/QWuO2bdxkqjOgwweRDvq+70JKKay1wnvP3XSrA5dKLcuCwzDguq68A9c1tvBKyjRN5fOsg4PzGYTqwaSUOs2guoWI21toJTneQWQT7eItwABahmWkthQpGAAAAABJRU5ErkJggg==); " +
				"}" +
				".btn.xkit-button-working:before { background-image: url(data:image/gif;base64,R0lGODlhEAAQAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDZEMUIyMTQ0MDFDMTFFM0I3QjRGNERGODZCRDlCN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDZEMUIyMTU0MDFDMTFFM0I3QjRGNERGODZCRDlCN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNkQxQjIxMjQwMUMxMUUzQjdCNEY0REY4NkJEOUI3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNkQxQjIxMzQwMUMxMUUzQjdCNEY0REY4NkJEOUI3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkQAAEALAAAAAAQABAAAAIVjI+py+0Po3QAmHptwoHzCYbiSDIFACH5BAkQAAEALAcABwAGAAIAAAIFBBJmaAUAIfkECRAAAQAsCwAHAAIAAgAAAgKEUQAh+QQFEAABACwAAAAAAQABAAACAkwBACH5BAUQAAEALAMABwACAAIAAAIChFEAIfkEBRAAAQAsBwAHAAIAAgAAAgKEUQAh+QQFEAABACwAAAAAAQABAAACAkwBADs=) !important; } " +
				".btn.xkit-button-done { background-color: #59982a !important; }" +
				".btn.xkit-button-error { background-color: #982a2a !important; }";

		XKit.tools.add_css(m_css, "x1cpostage_in_blog");

		var m_html = 	"<a id=\"x1cpostage_in_blog_reblog\" onclick=\"return false\" class=\"btn icon reblog no_label\">1-Click Reblog</a>" +
				"<a id=\"x1cpostage_in_blog_queue\" onclick=\"return false\" class=\"btn icon reblog no_label\">1-Click Queue</a>" +
				"<a id=\"x1cpostage_in_blog_draft\" onclick=\"return false\" class=\"btn icon reblog no_label\">1-Click Draft</a>";

		$(".btn.reblog").after(m_html);

		$("#x1cpostage_in_blog_reblog").click(function() {
			XKit.extensions.one_click_postage.in_blog_post($(this), 0, false);
		});

		$("#x1cpostage_in_blog_queue").click(function() {
			XKit.extensions.one_click_postage.in_blog_post($(this), 2, false);
		});

		$("#x1cpostage_in_blog_draft").click(function() {
			XKit.extensions.one_click_postage.in_blog_post($(this), 1, false);
		});

	},

	in_blog_post: function(obj, state, retry_mode) {

		if ($(obj).hasClass("xkit-button-working") === true) { return; }

		$(obj).removeClass("xkit-button-error");
		$(obj).removeClass("xkit-button-done");
		$(obj).addClass("xkit-button-working");

		var post_id = $(".btn.reblog").attr('data-reblog-id');
		var form_key = $(".btn.reblog").attr('data-form-key');
		var reblog_key = $(".btn.reblog").attr('href').split("/")[3];

		if (reblog_key.indexOf('?') !== -1) {
			reblog_key = reblog_key.substring(0, reblog_key.indexOf('?'));
		}

		var post_type = "";
		var channel_id = $("#tumblelog_name").attr('data-tumblelog-name');

		var root_id = $(XKit.extensions.one_click_postage.last_object).attr('data-root-id');

		var m_object = new Object();

		/*
			{"channel_id":"neoplethora",
			 "reblog_id":"53347650122",
			 "reblog_key":"22Csj9mI",
			 "post_type":false,
			 "form_key":"FFR35OVIeHyFd2sr9EZasl2m8E"}:
		*/

		var m_blogs = XKit.tools.get_blogs();
		var blog_id = "";

		if (m_blogs === "") {
			alert("Unable to QuickReblog/Queue:\nCan't get list of current blogs, please visit dashboard first.");
			return;
		} else {
			for(i=0;i<m_blogs.length;i++) {
				if (m_blogs[i] !== "") {
					blog_id = m_blogs[i];
					break;
				}
			}
		}

		XKit.extensions.one_click_postage.blogs_list = XKit.tools.get_blogs();

		if (XKit.extensions.one_click_postage.preferences.default_blog.value !== "") {

			if (XKit.extensions.one_click_postage.blogs_list.indexOf(XKit.extensions.one_click_postage.preferences.default_blog.value) !== -1) {

				channel_id = XKit.extensions.one_click_postage.preferences.default_blog.value;
				blog_id = channel_id;

			} else {

				XKit.iframe.full();
				XKit.window.show("Default blog not available","<b>Your default blog is no longer available.</b><br/>This might be caused by changing the URL of the blog or logging into a different account.<br/><br/>Please change the default blog or enable \"Blog Selector\" from One-Click Postage Control Panel to continue.","error","<div class=\"xkit-button default\" id=\"xkit-close-message-ok\">OK</div>");

				$("#xkit-close-message-ok").click(function() {

					XKit.iframe.restore();
					XKit.window.close();

				});
				return;

			}

		}

		m_object.channel_id = blog_id;
		m_object.reblog_id = parseInt(post_id);
		m_object.reblog_key = reblog_key;
		m_object.form_key = form_key;
		m_object.post_type = post_type;

		var tags = "";
		var caption = "";

		GM_xmlhttpRequest({
			method: "POST",
			url: "http://www.tumblr.com/svc/post/fetch",
			data: JSON.stringify(m_object),
			json: true,
			onerror: function(response) {

				if (response.status === 401) {
					alert("Unable to QuickReblog/Queue:\nError Code: INOCP01");
				} else {
					if (response.status === 404) {
						alert("Unable to QuickReblog/Queue:\nError Code: INOCP04 [Not Found]");
					} else {
						if (retry_mode !== true) {
							setTimeout(function() { XKit.extensions.one_click_postage.in_blog_post(obj, state, true); }, 500);
						} else {
							alert("Unable to QuickReblog/Queue:\nError Code: INOCP03 [Not allowed]");
						}
					}
				}

				$(obj).removeClass("xkit-button-working");
				$(obj).addClass("xkit-button-error");
				return;
			},
			onload: function(response) {
				// We are done!
				try {
					var mdata = jQuery.parseJSON(response.responseText);
				} catch(e) {
					//xkit_error(XKit.language.one_click_postage.status_error_title, XKit.language.generic_errors.not_json);
					alert("Unable to QuickReblog/Queue:\nError Code: INOCP11");
					$(obj).removeClass("xkit-button-working");
					$(obj).addClass("xkit-button-error");
					return;
				}
				if (mdata.errors === false) {
					XKit.extensions.one_click_postage.in_blog_process(mdata, state, obj, m_object, false);
				} else {
					alert("Unable to QuickReblog/Queue:\nError Code: INOCP31");
					$(obj).removeClass("xkit-button-working");
					$(obj).addClass("xkit-button-error");
				}
			}
		});

	},

	in_blog_process: function(data, state, obj, _m_object, retry_mode) {

		var m_object = new Object;

		m_object.form_key = _m_object.form_key;
		m_object.channel_id = _m_object.channel_id;

		m_object.detached = true;

		// console.log(data.post);

		m_object.reblog = true;
		m_object.reblog_id = parseInt(_m_object.reblog_id);
		m_object.reblog_key = _m_object.reblog_key;

		m_object.errors = false;
		m_object.created_post = data.created_post;
		m_object.context_page = data.post_context_page;
		m_object.post_context_page = data.post_context_page;
		m_object.silent = false;

		m_object.context_id = "";
		m_object.reblog_post_id = _m_object.reblog_id;

		// Not sure about this part:
		m_object["is_rich_text[one]"] = "0";
		m_object["is_rich_text[two]"] = "1";
		m_object["is_rich_text[three]"] = "0";

		m_object["post[slug]"] = "";
		m_object["post[draft_status]"] = "";
		//m_object["post[source_url]"] = data.post.reblog_source;
		m_object["post[date]"] = "";

		m_object["post[type]"] = data.post.type;

		var reblog_as_text = false;

		if (XKit.installed.check("reblog_as_text") === true) {
			if (XKit.installed.enabled("reblog_as_text") === true) {
				reblog_as_text = true;
			}
		}

		if (reblog_as_text) {

			try {

				if (data.post.can_reblog_as[0] === "regular") {

					m_object["post[type]"] = "regular";

				}

			} catch(e) {

				console.log("Can't read can_reblog_as....");

			}

		}

		m_object["post[tags]"] = "";

		if (typeof data.post.two === "undefined") {
			data.post.two = "";
		}

		m_object["post[tags]"] = "";

		if (XKit.extensions.one_click_postage.auto_tagger == true && typeof XKit.extensions.auto_tagger != "undefined") {
			// Call Auto Tagger for tags.
			if (state === 2) {
				var additional_tags = XKit.extensions.auto_tagger.return_tags_for_queue();
				if (additional_tags !== "") {
					if (m_object["post[tags]"] === "") {
						m_object["post[tags]"] = additional_tags;
					} else {
						m_object["post[tags]"] = m_object["post[tags]"] + "," + additional_tags;
					}
				}
			}
		}

		m_object["post[publish_on]"] ="";
		if (state === 0) {
			m_object["post[state]"] = "";
		} else {
			m_object["post[state]"] = state;
		}
		m_object.custom_tweet = "";

		XKit.interface.kitty.get(function(kitty_data) {

			if (kitty_data.errors === true) {

				// We fucked up for some reason.
				if (retry_mode !== true) {
					XKit.extensions.one_click_postage.in_blog_process(data, state, obj, m_object, true);
				} else {
					alert("Unable to QuickReblog/Queue:\nError Code: INOCP109-SFORMKEYFAIL");
					$(obj).removeClass("xkit-button-working");
					$(obj).addClass("xkit-button-error");
				}

				return;

			}

			GM_xmlhttpRequest({
				method: "POST",
				url: "http://www.tumblr.com/svc/post/update",
				data: JSON.stringify(m_object),
				json: true,
				headers: {
					"X-tumblr-puppies": kitty_data.kitten,
					"X-tumblr-form-key": XKit.interface.form_key(),
				},
				onerror: function(response) {
					XKit.interface.kitty.set("");
					if (response.status === 401) {
						alert("Unable to QuickReblog/Queue:\nError Code: INOCP101");
						$(obj).removeClass("xkit-button-working");
						$(obj).addClass("xkit-button-error");
					} else {
						if (response.status === 404) {
							alert("Unable to QuickReblog/Queue:\nError Code: INOCP104 Not Found");
							$(obj).removeClass("xkit-button-working");
							$(obj).addClass("xkit-button-error");
						} else {
							if (retry_mode !== true) {
								//XKit.extensions.one_click_postage.process(data, state, form_key, "", post_id, caption, tags, reblog_key, m_button, true, root_id, quick_queue_mode);
								XKit.extensions.one_click_postage.in_blog_process(data, state, obj, m_object, true);
							} else {
								alert("Unable to QuickReblog/Queue:\nError Code: INOCP109-" + response.status);
								$(obj).removeClass("xkit-button-working");
								$(obj).addClass("xkit-button-error");
							}
						}
					}
				},
				onload: function(response) {
					// We are done!
					XKit.interface.kitty.set(response.getResponseHeader("X-tumblr-kittens"));
					try {
						var mdata = jQuery.parseJSON(response.responseText);
						//console.log("---DONE!---");
						//console.log(mdata);
					} catch(e) {
						alert("Unable to QuickReblog/Queue:\nError Code: INOCP181");
						$(obj).removeClass("xkit-button-working");
						$(obj).addClass("xkit-button-error");
					}
					if (mdata.errors === false) {
						$(obj).removeClass("xkit-button-working");
						$(obj).addClass("xkit-button-done");
					} else {
						// xkit_error(XKit.language.one_click_postage.status_error_title, XKit.language.generic_errors.server_error);
						alert("Unable to QuickReblog/Queue:\nError Code: INOCP901");
						$(obj).removeClass("xkit-button-working");
						$(obj).addClass("xkit-button-error");
					}
				}
			});

		});

	},

	cpanel: function(obj) {

		$(obj).append("<div id=\"one_click_postage_warning_movage\">Tagging options are moved to a separate extension called \"Auto Tagger.\"</div>");

		$("#xkit-alreadyreblogged-help").click(function() {

			XKit.window.show("AlreadyReblogged","AlreadyReblogged keeps the track of the posts you reblog using One-Click Postage.<br/><br/>When you queue, draft or reblog a post using One-Click postage, the next time you refresh your page, the reblog button will turn green automatically.<br/><br/>Please note that this feature is experimental, and for now only keeps the last 3,000 posts.","info","<div class=\"xkit-button default\" id=\"xkit-close-message\">OK</div>");

		});

	},

	get_autotagger: function() {

		if (XKit.installed.check("auto_tagger") === false) {
			XKit.extensions.one_click_postage.auto_tagger = false;
		} else {
			if (XKit.installed.enabled("auto_tagger") === true) {
				if (typeof XKit.extensions.auto_tagger	=== "undefined") {
					// Not booted up yet?
					setTimeout(function() { XKit.extensions.one_click_postage.get_autotagger(); }, 100);
				} else {
					XKit.console.add("Auto tagger installed and found");
					XKit.extensions.one_click_postage.auto_tagger = true;
					XKit.extensions.one_click_postage.auto_tagger_preferences = XKit.extensions.auto_tagger.preferences;
				}
			} else {
				XKit.extensions.one_click_postage.auto_tagger = false;
			}
		}

	},

	get_quicktags: function() {

		if (XKit.installed.check("quick_tags") === false) {
			XKit.extensions.one_click_postage.quick_tags = false;
		} else {
			if (XKit.installed.enabled("quick_tags") === true) {
				if (typeof XKit.extensions.quick_tags	=== "undefined") {
					// Not booted up yet?
					setTimeout(function() { XKit.extensions.one_click_postage.get_quicktags(); }, 100);
				} else {
					XKit.console.add("Quick Tags installed and found");
					XKit.extensions.one_click_postage.quick_tags = true;
				}
			} else {
				XKit.extensions.one_click_postage.quick_tags = false;
			}
		}

	},

	run: function() {

		/*XKit.extensions.one_click_postage.previous_div_id = "";*/
		XKit.tools.init_css("one_click_postage");

		// Let's first check if we have auto_tagger installed and active.
		XKit.extensions.one_click_postage.get_autotagger();

		// Then, check Quick Tags.
		XKit.extensions.one_click_postage.get_quicktags();

		if (this.preferences.allow_resize.value === true) {
			XKit.tools.add_css("#x1cpostage_caption { resize: vertical; }", "one_click_postage_resize");
		}

		if (this.preferences.show_small_ui.value === true) {

			this.caption_height = 50;
			var slim_css = 	"#x1cpostage_caption { height: 50px; }" +
					"#x1cpostage_reblog, #x1cpostage_queue, #x1cpostage_draft { height: 32px; }";
			XKit.tools.add_css(slim_css, "one_click_postage_slim");

		}

		var m_remove_button = "<div id=\"x1cpostage_remove_caption\">remove caption</div>";

		if (this.preferences.show_caption_remover.value !== true) {
			m_remove_button = "";
		}

		var m_remove_box_style = "";
		if (this.preferences.show_caption.value !== true) {
			m_remove_box_style = " style=\"display: none;\" ";
		}

		var m_clear_tags_button = "<div id=\"x1cpostage_clear_tags\">clear tags</div>";

		if (this.preferences.show_tag_remover.value !== true) {
			m_clear_tags_button = "";
		}

		var m_html = "";

		if (this.preferences.show_reverse_ui.value === true) {

			var m_html = "<div id=\"x1cpostage_box\">" +
						"<input id=\"x1cpostage_tags\" placeholder=\"tags (comma separated)\" />" +
						m_clear_tags_button +
						"<textarea id=\"x1cpostage_caption\" " + m_remove_box_style + " placeholder=\"caption\"></textarea>" +
						"<div id=\"x1cpostage_replace\" " + m_remove_box_style + "><div>&nbsp;</div>replace caption, not append</div>" +
						m_remove_button +
						"<div id=\"x1cpostage_reblog\"><i>&nbsp;</i></div>" +
						"<div id=\"x1cpostage_queue\"><i>&nbsp;</i></div>" +
						"<div id=\"x1cpostage_draft\"><i>&nbsp;</i></div>" +
					"</div>";

			XKit.tools.add_css("#x1cpostage_draft { border-radius: 0px 0px 3px 0px; } #x1cpostage_reblog { border-radius: 0px 0px 0px 3px; } #x1cpostage_tags { border-radius: 3px 3px 0px 0px; border-bottom: 0; } #x1cpostage_replace { border-bottom: 0; } #x1cpostage_remove_caption { border-top: 1px solid #abafbc; border-bottom: 0; }","x1cpostage_reverse_ui");


		} else {

			var m_html = "<div id=\"x1cpostage_box\" class=\"xkit-no-nipple xkit-1xcpostage-non-reversed\">" +
						"<div id=\"x1cpostage_reblog\"><i>&nbsp;</i></div>" +
						"<div id=\"x1cpostage_queue\"><i>&nbsp;</i></div>" +
						"<div id=\"x1cpostage_draft\"><i>&nbsp;</i></div>" +
						"<textarea id=\"x1cpostage_caption\" + m_remove_box_style + placeholder=\"caption\"></textarea>" +
						"<div id=\"x1cpostage_replace\" " + m_remove_box_style + "><div>&nbsp;</div>replace caption, not append</div>" +
						m_remove_button +
						"<input id=\"x1cpostage_tags\" placeholder=\"tags (comma separated)\" />" +
						m_clear_tags_button +
					"</div>";


		}

		$("body").append(m_html);

		$(document).on("mouseover","#x1cpostage_queue", function() {

			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_press");
			$("#x1cpostage_box").addClass("xkit_x1cpostage_queue_hover");

		});

		$(document).on("mouseout","#x1cpostage_queue", function() {

			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_press");
			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_hover");

		});

		$(document).on("mousedown","#x1cpostage_queue", function() {

			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_hover");
			$("#x1cpostage_box").addClass("xkit_x1cpostage_queue_press");

		});

		$(document).on("mouseup","#x1cpostage_queue", function() {

			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_press");

		});

		var m_blogs = XKit.tools.get_blogs();
		var m_blogselector_html = "";

		XKit.extensions.one_click_postage.blogs_list = m_blogs;
		XKit.extensions.one_click_postage.default_blog_id = m_blogs[0];

		if (this.preferences.show_blog_selector.value === true) {
			for(i=0;i<m_blogs.length;i++) {
				if (m_blogs[i] !== "") {
					var extra_cls = "";
					if (this.preferences.default_blog.value !== "") {
						if (this.preferences.default_blog.value === m_blogs[i]) {
							extra_cls = "selected";
						}
					}
					m_blogselector_html = m_blogselector_html + "<option " + extra_cls + " value=\"" +
							m_blogs[i] + "\">" + m_blogs[i] + "</option>";
				}
			}
			m_blogselector_html = "<select id=\"x1cpostage_blog\">" + m_blogselector_html + "</select>";
			if (this.preferences.show_reverse_ui.value === true) {
				$("#x1cpostage_reblog").before(m_blogselector_html);
			} else {
				$("#x1cpostage_caption").before(m_blogselector_html);
			}
		}

		if (this.preferences.show_social.value === true) {
			var m_html = "<div id=\"xkit-1cp-social\">" +
					"<div data-site=\"facebook\" id=\"xkit-1cp-social-facebook\">&nbsp;</div>" +
					"<div data-site=\"twitter\" id=\"xkit-1cp-social-twitter\">&nbsp;</div>" +
				     "</div>";
			if (this.preferences.show_reverse_ui.value === true) {
				$("#x1cpostage_reblog").before(m_html);
			} else {
				$("#x1cpostage_draft").after(m_html);
			}
		}

		var share_fb = XKit.storage.get("one_click_postage","share_on_facebook", "false");
		var share_twitter = XKit.storage.get("one_click_postage","share_on_twitter", "false");

		if (share_fb === "true") { $("#xkit-1cp-social-facebook").addClass("selected"); }
		if (share_twitter === "true") { $("#xkit-1cp-social-twitter").addClass("selected"); }

		$("#xkit-1cp-social-facebook, #xkit-1cp-social-twitter").click(function() {
			$(this).toggleClass("selected");
			var m_value = "false";
			if ($(this).hasClass("selected") === true) { m_value = "true"; }
			XKit.storage.set("one_click_postage","share_on_" + $(this).attr('data-site'), m_value);
		});

		$(document).on("mouseover",".reblog_button,.post_control.reblog", function(event) {
			if ($(this).hasClass("radar_button") === true) {return; }
			clearTimeout(XKit.extensions.one_click_postage.menu_closer_int);
			XKit.extensions.one_click_postage.user_on_box = true;
			XKit.extensions.one_click_postage.open_menu($(this));
		});

		$(document).on("mouseout mouseleave",".reblog_button,.post_control.reblog", function() {
			if ($(this).hasClass("radar_button") === true) {return; }
			XKit.extensions.one_click_postage.user_on_box = false;
			//console.log("calling close_menu 1");
			XKit.extensions.one_click_postage.close_menu($(this));
		});

		$(document).on("click",".reblog_button,.post_control.reblog", function() {
			XKit.extensions.one_click_postage.user_on_box = false;
			//console.log("calling close_menu 2");
			XKit.extensions.one_click_postage.close_menu($(this), true);
		});


		var cancel_menu_close = function() {
			clearTimeout(XKit.extensions.one_click_postage.menu_closer_int);
			XKit.extensions.one_click_postage.user_on_box = true;
		};

		var menu_close = function() {
			// Only close the menu if it doesn't have keyboard or mouse focus
			if ($("#x1cpostage_box").find('input:focus, textarea:focus').length == 0 && $('#x1cpostage_box:hover').length == 0) {
				XKit.extensions.one_click_postage.user_on_box = false;
				//console.log("calling close_menu 3");
				XKit.extensions.one_click_postage.close_menu($(this));
			}
		};

		/*$("#x1cpostage_caption, #x1cpostage_tags").bind("focus", cancel_menu_close);
		$("#x1cpostage_caption, #x1cpostage_tags").bind("blur", function() { console.log("11"); menu_close() });
		*/

		$(document).on("mouseover","#x1cpostage_box", cancel_menu_close);
		$(document).on("mouseout","#x1cpostage_box", function() { console.log("1221"); menu_close() });

		$("#x1cpostage_tags, #x1cpostage_caption").bind("keydown", function(event) {
			if (XKit.extensions.one_click_postage.preferences.enable_keyboard_shortcuts.value === true
					&& event.which == 27) { // 27 = Escape
				$(this).blur();
				XKit.extensions.one_click_postage.user_on_box = false;
				//console.log("calling close_menu 4");
				XKit.extensions.one_click_postage.close_menu($(this), true);
				event.preventDefault();
			}
			event.stopPropagation();
			event.stopImmediatePropagation();
		});

		$("#x1cpostage_remove_caption").click(function() {

			if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {

				$("#x1cpostage_remove_caption").css('display','none');
				$("#x1cpostage_caption").css('display','none');
				$("#x1cpostage_replace").css('display','none');

				// Determine where we are going to show the box.
				var obj = XKit.extensions.one_click_postage.last_icon_object;
				var offset = $(obj).offset();

				// Box position
				var box_left = offset.left - ($("#x1cpostage_box").width() / 2) + 13;
				var box_top = (offset.top - $("#x1cpostage_box").height()) - 12;

				$("#x1cpostage_box").css("top", box_top + "px");
				$("#x1cpostage_box").css("left", box_left + "px");


			} else {

				$("#x1cpostage_remove_caption").slideUp('fast');
				$("#x1cpostage_caption").slideUp('fast');
				$("#x1cpostage_replace").slideUp('fast');

			}


			$("#x1cpostage_caption").addClass("x1cpostage_remove_caption_on");
			$("#x1cpostage_tags").css("border-top","1px solid #abafbc");


		});

		$("#x1cpostage_clear_tags").click(function() {

			$("#x1cpostage_tags").val("");

		});

		$("#x1cpostage_replace").click(function() {
			$(this).toggleClass("selected");
		});

		$("#x1cpostage_reblog").click(function() {
			XKit.extensions.one_click_postage.post(0, false);
		});

		$("#x1cpostage_queue").click(function() {
			XKit.extensions.one_click_postage.post(2, false);
		});

		$("#x1cpostage_draft").click(function() {
			XKit.extensions.one_click_postage.post(1, false);
		});

		if (this.preferences.enable_keyboard_shortcuts.value === true) {
			$(document).on('keydown', XKit.extensions.one_click_postage.process_keydown);
			// Must use capture=true here to intercept Tumblr's default handlers, so we can't use jQuery's .on()
			window.addEventListener('keydown', XKit.extensions.one_click_postage.suspend_tumblr_key_commands, true);
		}

		this.init_keep_tags_dashboard();

		if (this.preferences.enable_alreadyreblogged.value === true) {

			var m_data = XKit.storage.get("one_click_postage","already_reblogged","");

			try {
				XKit.extensions.one_click_postage.already_reblogged = JSON.parse(m_data);
			} catch(e) {
				XKit.extensions.one_click_postage.already_reblogged = new Array();
			}

			XKit.post_listener.add("already_reblogged", XKit.extensions.one_click_postage.check_if_alreadyreblogged);
			XKit.extensions.one_click_postage.check_if_alreadyreblogged();

		}

		if (this.preferences.enable_quick_queue.value === true) {

			if (XKit.interface.where().drafts === true || XKit.interface.where().queue === true) { return; }
			if ($("body").hasClass("is_private_channel")) {return; }

			XKit.interface.create_control_button("xkit-one-click-postage-quickqueue", this.qq_icon, "QuickQueue", "", this.qq_ok_icon);
			XKit.post_listener.add("quick_queue_do_posts", XKit.extensions.one_click_postage.quick_queue_do_posts);
			XKit.extensions.one_click_postage.quick_queue_do_posts();

			$(document).on('click', '.xkit-one-click-postage-quickqueue', XKit.extensions.one_click_postage.quick_queue_button_clicked);

		}

		if (XKit.extensions.one_click_postage.preferences.dont_scroll_quicktags.value === true) {

			XKit.tools.add_css("#x1cpostage_quick_tags { max-height: 10000px !important; }","one_click_postage_qtdontscroll");

		}

	},

	quick_queue_button_clicked: function(e) {

		var obj = $(e.target);

		if ($(obj).hasClass("xkit-interface-working") === true) { return; }

		var parent_box = $(e.target).parentsUntil('.post').parent();

		XKit.extensions.one_click_postage.last_object = parent_box;
		XKit.extensions.one_click_postage.last_icon_object = obj;
		XKit.extensions.one_click_postage.last_post_id = $(parent_box).attr('data-post-id');

		XKit.interface.switch_control_button($(obj), true);
		XKit.extensions.one_click_postage.post(2, false, true);

	},

	quick_queue_do_posts: function() {

		var posts = XKit.interface.get_posts("xkit-1cp-quick-queue-done");

		if (XKit.interface.where().queue === true) { return; }

		$(posts).each(function() {

			$(this).addClass("xkit-1cp-quick-queue-done");

			if (XKit.interface.where().inbox === true) { return; }

			XKit.interface.add_control_button(this, "xkit-one-click-postage-quickqueue", "");

		});

	},

	check_if_alreadyreblogged: function() {

		$(".post").not(".xkit_already_reblogged_check").each(function() {

			var post_id = $(this).attr('data-root-id');
			$(this).addClass("xkit_already_reblogged_check");

			if (XKit.extensions.one_click_postage.is_alreadyreblogged(post_id)) {

				if (XKit.extensions.one_click_postage.preferences.enable_hide_alreadyreblogged.value === true) {
					if (XKit.interface.where().dashboard === true) { $(this).remove(); }
				}

				$(this).find(".post_control.reblog").addClass("xkit-one-click-reblog-done");

			}

		});

	},

	destroy: function() {
		$(document).off('click', '.reblog_button,.post_control.reblog', XKit.extensions.one_click_postage.process_click)
			.off('keydown', XKit.extensions.one_click_postage.process_keydown);
		window.removeEventListener('keydown', XKit.extensions.one_click_postage.suspend_tumblr_key_commands);
		XKit.tools.remove_css("one_click_postage");
		XKit.post_listener.remove("already_reblogged");
		XKit.tools.remove_css("x1cpostage_reverse_ui");
		$("#x1cpostage_box").remove();
		XKit.tools.remove_css("one_click_postage_slim");
		XKit.tools.remove_css("one_click_postage_resize");
		XKit.tools.remove_css("one_click_postage_qtdontscroll");
	},

	init_keep_tags_dashboard: function() {

		$(document).on('click', '.reblog_button,.post_control.reblog', XKit.extensions.one_click_postage.process_click);

	},

	suspend_tumblr_key_commands: function(e) {
		// 82 = R
		if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.keyCode !== 82) {
			return;
		}
		XKit.tools.add_function(function(){Tumblr.KeyCommands.suspend()}, true, '');
	},

	process_keydown: function(e) {
		// 68 = D, 81 = Q, 82 = R, 84 = T
		if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
				|| (e.which !== 68 && e.which !== 81 && e.which !== 82 && e.which !== 84)
				|| $(e.target).is('input,textarea')) {
			return;
		}
		// Tumblr puts ~68px padding at the top of the screen when you use J/K to navigate
		var screenPos = $(window).scrollTop() + 70;

		// Find the post at the top of the screen, if there is one
		$(".reblog_button,.post_control.reblog").filter(':visible').each(function() {
			if ($(this).hasClass("radar_button")) {return; }
			var parent_box = $(this).parentsUntil(".post").parent();
			var boxPos = parent_box.offset().top;
			if (boxPos <= screenPos && boxPos + parent_box.innerHeight() > screenPos) {
				switch (e.which) {
					case 68: // 68 = D
						XKit.extensions.one_click_postage.open_menu($(this), true);
						XKit.extensions.one_click_postage.post(1, false);
						break;
					case 81: // 81 = Q
						XKit.extensions.one_click_postage.open_menu($(this), true);
						XKit.extensions.one_click_postage.post(2, false);
						break;
					case 82: // 82 = R
						XKit.extensions.one_click_postage.open_menu($(this), true);
						XKit.extensions.one_click_postage.post(0, false);
						break;
					case 84: // 84 = T
						XKit.extensions.one_click_postage.user_on_box = true;
						XKit.extensions.one_click_postage.open_menu($(this), false, true);
						$('#x1cpostage_tags').focus();
						break;
				}
				e.preventDefault();
				return false;
			} else if (boxPos > screenPos) {
				// Post is too far down the screen, stop looking
				return false;
			}
		});
		// re-enable tumblr's key commands since we suspended them in suspend_tumblr_key_commands
		XKit.tools.add_function(function(){Tumblr.KeyCommands.resume()}, true, '');
	},

	process_click: function(e) {

		var parent_box = $(e.target).parentsUntil('.post').parent();

		if (XKit.extensions.one_click_postage.auto_tagger == true && typeof XKit.extensions.auto_tagger != "undefined") {
			// Call Auto Tagger for tags.
			var additional_tags = XKit.extensions.auto_tagger.return_tags($(parent_box));
			if (additional_tags !== "") {
				setTimeout(function() {
					XKit.extensions.auto_tagger.inject_to_window(additional_tags);
				}, 200);
			}
		}

	},

	open_menu: function(obj, hide_ui, force_on_screen) {

		if ($(obj).attr('x1cpostage_disabled') === "true" || $(obj).hasClass("xkit-one-click-reblog-working") === true) {
			// we are!
			return;
		}

		// Get the box ID.
		var parent_box = $(obj).parentsUntil(".post").parent();
		var box_id = $(parent_box).attr('id');
		var previous_id = $(XKit.extensions.one_click_postage.last_object).attr('id');

		// Let's first hide our previous box.
		// only if the current id != previous ID.
		if (box_id !== previous_id) {
			// It is not! Hide it.
			// Also, change all the settings.
			$("#x1cpostage_box").css('display','none');
			XKit.extensions.one_click_postage.reset_box();
		} else {
			// Lets see if the box is already open.
			if ($("#x1cpostage_box").css("display") === "block") {
				// It is. Let's end.
				return;
			}
		}

		// Re-show the caption stuff.
		if (XKit.extensions.one_click_postage.preferences.show_caption.value === true) {
			$("#x1cpostage_caption").css("display","block");
			$("#x1cpostage_replace").css("display","block");
		} else {
			$("#x1cpostage_caption").css("display","none");
			$("#x1cpostage_replace").css("display","none");
		}

		$("#x1cpostage_remove_caption").css("display","block");
		$("#x1cpostage_caption").removeClass("x1cpostage_remove_caption_on");
		$("#x1cpostage_tags").css("border-top","0px");
		$("#x1cpostage_caption").css("height", XKit.extensions.one_click_postage.caption_height + "px");

		$(obj).attr('title','');
		/*XKit.extensions.one_click_postage.previous_div_id = box_id;*/

		if (XKit.extensions.one_click_postage.auto_tagger == true && typeof XKit.extensions.auto_tagger != "undefined") {
			// Call Auto Tagger for tags.
			var additional_tags = XKit.extensions.auto_tagger.return_tags($(parent_box));
			$("#x1cpostage_tags").val(additional_tags);
		}

		// Quick Tags?
		$("#x1cpostage_quick_tags").remove();
		if (XKit.extensions.one_click_postage.quick_tags === true  && typeof XKit.extensions.quick_tags != "undefined") {
			// Call Quick Tags to render our box.
			if (XKit.extensions.quick_tags.preferences.show_in_one_click_postage.value === true) {
				var m_html = "<div id=\"x1cpostage_quick_tags\">" + XKit.extensions.quick_tags.return_for_one_click_postage() + "</div>";
				if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {
					$("#x1cpostage_caption").before(m_html);
				} else {
					$("#x1cpostage_tags").before(m_html);
					$("#x1cpostage_quick_tags").addClass("xkit-no-reverse-ui");
				}
			}
		}

		if (hide_ui !== true) {
			// Determine where we are going to show the box.
			var offset = $(obj).offset();

			// Box position

			var box_left = offset.left - ($("#x1cpostage_box").width() / 2) + 13;
			var box_top = offset.top + 35;

			if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {

				box_top = (offset.top - $("#x1cpostage_box").height()) - 12;

			}

			if (force_on_screen === true) {
				var window_top = $(window).scrollTop();
				var window_bottom = window_top + $(window).height();
				if (box_top < window_top) {
					box_top = window_top + 5;
				} else if (box_top + $("#x1cpostage_box").height() > window_bottom) {
					box_top = window_bottom - $("#x1cpostage_box").height() - 5
				}
			}

			$("#x1cpostage_box").css("top", box_top + "px");
			$("#x1cpostage_box").css("left", box_left + "px");

			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_press");
			$("#x1cpostage_box").removeClass("xkit_x1cpostage_queue_hover");

			if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {
				$("#x1cpostage_box").fadeIn('fast');
			} else {
				$("#x1cpostage_box").slideDown('fast');
			}
		}

		XKit.extensions.one_click_postage.last_object = parent_box;
		XKit.extensions.one_click_postage.last_icon_object = obj;
		XKit.extensions.one_click_postage.last_post_id = $(parent_box).attr('data-post-id');


	},
	reset_box: function() {
		$("#x1cpostage_caption").val("");
		$("#x1cpostage_tags").val("");
		$("#x1cpostage_tags").blur();
		$("#x1cpostage_caption").blur();
	},
	close_menu: function(obj, force) {

		//console.log("Close menu called: XKit.extensions.one_click_postage.user_on_box = " + XKit.extensions.one_click_postage.user_on_box);
		clearTimeout(XKit.extensions.one_click_postage.menu_closer_int);

		if (force === true) {
			last_object = null;
			XKit.extensions.one_click_postage.user_on_box = false;
			if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {
				$("#x1cpostage_box").fadeOut('fast');
			} else {
				$("#x1cpostage_box").slideUp('fast');
			}
			return;
		}

		XKit.extensions.one_click_postage.menu_closer_int = setTimeout(function() {
			// console.log("CLOSING! XKit.extensions.one_click_postage.user_on_box = " + XKit.extensions.one_click_postage.user_on_box);
			if (XKit.extensions.one_click_postage.user_on_box === false) {
				last_object = null;
				if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {
					$("#x1cpostage_box").fadeOut('fast');
				} else {
					$("#x1cpostage_box").slideUp('fast');
				}
			}
		}, 700);
	},
	post: function(state, retry_mode, quick_queue_mode) {

		if (XKit.extensions.one_click_postage.preferences.show_reverse_ui.value === true) {
			$("#x1cpostage_box").fadeOut('fast');
		} else {
			$("#x1cpostage_box").slideUp('fast');
		}
		var post_id = $(XKit.extensions.one_click_postage.last_object).attr('data-post-id');
		var form_key = XKit.interface.form_key();
		var reblog_key = $(XKit.extensions.one_click_postage.last_object).attr('data-reblog-key');
		var post_type = $(XKit.extensions.one_click_postage.last_object).attr('data-type');
		var channel_id = $(XKit.extensions.one_click_postage.last_object).attr('data-tumblelog-name');

		if (reblog_key == "" || reblog_key == "undefined" || typeof reblog_key == "undefined") {
			var reblog_link = $(XKit.extensions.one_click_postage.last_object).find(".post_control.reblog").attr('href').split("/");
			reblog_key = reblog_link[reblog_link.length - 1];
		}

		var root_id = $(XKit.extensions.one_click_postage.last_object).attr('data-root-id');

		var m_object = new Object();

		/*
			{"channel_id":"neoplethora",
			 "reblog_id":"53347650122",
			 "reblog_key":"22Csj9mI",
			 "post_type":false,
			 "form_key":"FFR35OVIeHyFd2sr9EZasl2m8E"}:
		*/

		m_object.channel_id = channel_id;
		m_object.reblog_id = parseInt(post_id);
		m_object.reblog_key = reblog_key;
		m_object.form_key = form_key;
		m_object.post_type = post_type;

		var blog_id = XKit.extensions.one_click_postage.default_blog_id;
		if ($("#x1cpostage_blog").length > 0) {
			blog_id = $("#x1cpostage_blog").val();
			XKit.extensions.one_click_postage.default_blog_id = $("#x1cpostage_blog").val();
		} else {

			if (XKit.extensions.one_click_postage.preferences.default_blog.value !== "") {

				if (XKit.extensions.one_click_postage.blogs_list.indexOf(XKit.extensions.one_click_postage.preferences.default_blog.value) !== -1) {

					blog_id = XKit.extensions.one_click_postage.preferences.default_blog.value;

				} else {

					XKit.window.show("Default blog not available","<b>Your default blog is no longer available.</b><br/>This might be caused by changing the URL of the blog or logging into a different account.<br/><br/>Please change the default blog or enable \"Blog Selector\" from One-Click Postage Control Panel to continue.","error","<div class=\"xkit-button default\" id=\"xkit-close-message\">OK</div>");
					return;

				}

			}

		}

		if (quick_queue_mode !== true) {
			$(XKit.extensions.one_click_postage.last_object).find(".reblog_button, .post_control.reblog").addClass("xkit-one-click-reblog-working");
		}

		var m_button = $(XKit.extensions.one_click_postage.last_object).find(".reblog_button, .post_control.reblog");

		if (quick_queue_mode) {
			m_button = $(XKit.extensions.one_click_postage.last_object).find(".xkit-one-click-postage-quickqueue");
		}

		var caption = $("#x1cpostage_caption").val();
		var tags = $("#x1cpostage_tags").val();

		if (quick_queue_mode) {
			tags = "";
			caption = "";
		}

		var xkit_version = XKit.version.split(".");
		var xkit_version_minor = parseInt(xkit_version[1]);

		if (xkit_version_minor < 3) {

			$(m_button).removeClass("xkit-one-click-reblog-working");
			XKit.extensions.one_click_postage.show_error("666", state);
			return;

		}

		GM_xmlhttpRequest({
			method: "POST",
			url: "http://www.tumblr.com/svc/post/fetch",
			data: JSON.stringify(m_object),
			json: true,
			onerror: function(response) {

				if (response.status === 401) {
					XKit.extensions.one_click_postage.show_error("OCP01", state);
				} else {
					if (response.status === 404) {
						XKit.extensions.one_click_postage.show_error("OCP02 [Post Not Found]", state);
					} else {
						if (retry_mode !== true) {
							setTimeout(function() { XKit.extensions.one_click_postage.post(state, true, quick_queue_mode); }, 500);
						} else {
							XKit.extensions.one_click_postage.show_error("OCP03-" + response.status, state);
						}
					}
				}

				$(m_button).removeClass("xkit-one-click-reblog-working");
				return;
			},
			onload: function(response) {
				// We are done!
				try {
					var mdata = jQuery.parseJSON(response.responseText);
				} catch(e) {
					//xkit_error(XKit.language.one_click_postage.status_error_title, XKit.language.generic_errors.not_json);
					XKit.extensions.one_click_postage.show_error("OCP04", state);
					$(m_button).removeClass("xkit-one-click-reblog-working");
					return;
				}
				if (mdata.errors === false) {
					XKit.extensions.one_click_postage.process(mdata, state, form_key, blog_id, post_id, caption, tags, reblog_key, m_button, false, root_id, quick_queue_mode);
				} else {
					XKit.extensions.one_click_postage.show_error("OCP05", state);
					$(m_button).removeClass("xkit-one-click-reblog-working");
				}
			}
		});

	},

	process: function(data, state, form_key, blog_id, post_id, caption, tags, reblog_key, m_button, retry_mode, root_id, quick_queue_mode) {

		var m_object = new Object;

		if (blog_id === "" ||typeof blog_id === "undefined") {

			var m_blogs = XKit.tools.get_blogs();
			for(i=0;i<m_blogs.length;i++) {
				if (m_blogs[i] !== "") {
					blog_id = m_blogs[i];
					break;
				}
			}

			if (blog_id === "" || typeof blog_id === "undefined") {
				if ($("#tab_switching").length > 0) {
					var def_blog = $("#tab_switching").find(".tab_blog.item").not(".tab_dashboard").attr('id').replace("tab_blog_","");
					blog_id = def_blog;
					//alert("got id from def_blog");
				} else {
					XKit.window.show("Unable to process request","Unable to set Blog ID. Please return to the dashboard and try again, and send me an ask if this continues.<br/><br/>The error code to report is <b>OCP30</b>. Thank you.","error","<div class=\"xkit-button default\" id=\"xkit-close-message\">OK</div><a href=\"http://xkit-extension.tumblr.com/ask\" class=\"xkit-button\">Send an ask</a>");
					return;
				}
			}
		}

		m_object.form_key = form_key;
		m_object.channel_id = blog_id;

		m_object.detached = true;

		m_object.reblog = true;
		m_object.reblog_id = parseInt(post_id);
		m_object.reblog_key = reblog_key;

		m_object.errors = false;
		m_object.created_post = data.created_post;
		m_object.context_page = data.post_context_page;
		m_object.post_context_page = data.post_context_page;
		m_object.silent = false;

		m_object.context_id = "";
		m_object.reblog_post_id = post_id;

		// Not sure about this part:
		m_object["is_rich_text[one]"] = "0";
		m_object["is_rich_text[two]"] = "1";
		m_object["is_rich_text[three]"] = "0";

		m_object["post[slug]"] = "";
		m_object["post[draft_status]"] = "";
		//m_object["post[source_url]"] =data.post.reblog_source;
		m_object["post[date]"] = "";

		m_object["post[type]"] = data.post.type;

		if (tags !== "" && typeof tags !== "undefined") {
			m_object["post[tags]"] = tags;
		} else {
			m_object["post[tags]"] = "";
		}

		if ($("#xkit-1cp-social-twitter").hasClass("selected") === true) {
			m_object["send_to_twitter"] = "on";
		}

		if ($("#xkit-1cp-social-facebook").hasClass("selected") === true) {
			m_object["send_to_fbog"] = "on";
		}

		if (typeof data.post.two === "undefined") {
			data.post.two = "";
		}

		var photo_post = false;
		if (data.post.type === "photo" || data.post.type === "photoset") {
			photo_post = true;
		}

		caption = XKit.tools.replace_all(caption, "\n", "<br/>");

		var variable_to_use = "post[two]";
		var current_caption = data.post.two;

		if (data.post.type === "link" || data.post.type === "note") {
			variable_to_use = "post[three]";
			current_caption = data.post.three;
		}

		if ($("#x1cpostage_caption").hasClass("x1cpostage_remove_caption_on") === true) {

			// User wishes to remove caption.
			m_object[variable_to_use] = "";

		} else {

			if (caption !== "" && typeof caption !== "undefined") {
				if ($("#x1cpostage_replace").hasClass("selected") === false) {
					if (XKit.extensions.one_click_postage.preferences.enable_popup_html.value !== true) {
						m_object[variable_to_use] = current_caption + "<p>" + caption.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + "</p>";
					} else {
						m_object[variable_to_use] = current_caption + "<p>" + caption + "</p>";
					}
				} else {
					if (XKit.extensions.one_click_postage.preferences.enable_popup_html.value !== true) {
						m_object[variable_to_use] = caption.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
					} else {
						m_object[variable_to_use] = caption;
					}
				}
			} else {
				m_object[variable_to_use] = current_caption;
			}

		}

		m_object[variable_to_use] = XKit.tools.replace_all(m_object[variable_to_use], "&lt;br&gt;", "<br/>");
		m_object[variable_to_use] = XKit.tools.replace_all(m_object[variable_to_use], "&lt;br/&gt;", "<br/>");

		if (tags !== "" && typeof tags !== "undefined") {
			m_object["post[tags]"] = tags;
		} else {
			m_object["post[tags]"] = "";
		}

		if (XKit.extensions.one_click_postage.auto_tagger == true && typeof XKit.extensions.auto_tagger != "undefined") {
			// Call Auto Tagger for tags.
			if (state === 2) {
				var additional_tags = XKit.extensions.auto_tagger.return_tags_for_queue();
				if (additional_tags !== "") {
					if (m_object["post[tags]"] === "") {
						m_object["post[tags]"] = additional_tags;
					} else {
						m_object["post[tags]"] = m_object["post[tags]"] + "," + additional_tags;
					}
				}
			}
		}

		m_object["post[publish_on]"] ="";
		if (state === 0) {
			m_object["post[state]"] = "";
		} else {
			m_object["post[state]"] = state;
		}
		m_object.custom_tweet = "";

		XKit.interface.kitty.get(function(kitty_data) {

			if (kitty_data.errors === true) {

				// We fucked up for some reason.
				if (retry_mode !== true) {
					XKit.extensions.one_click_postage.process(data, state, form_key, "", post_id, caption, tags, reblog_key, m_button, true, root_id, quick_queue_mode);
				} else {
					XKit.extensions.one_click_postage.show_error("OCP-FORMKEYREQFAIL08", state);
				}

				return;

			}

			GM_xmlhttpRequest({
				method: "POST",
				url: "http://www.tumblr.com/svc/post/update",
				data: JSON.stringify(m_object),
				json: true,
				headers: {
					"X-tumblr-puppies": kitty_data.kitten,
					"X-tumblr-form-key": XKit.interface.form_key(),
				},
				onerror: function(response) {
					XKit.interface.kitty.set("");
					if (response.status === 401) {
						XKit.extensions.one_click_postage.show_error("OCP06", state);
					} else {
						if (response.status === 404) {
							XKit.extensions.one_click_postage.show_error("OCP07", state);
						} else {
							if (retry_mode !== true) {
								XKit.extensions.one_click_postage.process(data, state, form_key, "", post_id, caption, tags, reblog_key, m_button, true, root_id, quick_queue_mode);
							} else {
								XKit.extensions.one_click_postage.show_error("OCP08-" + response.status, state);
							}
						}
					}
					$(m_button).removeClass("xkit-one-click-reblog-working");
				},
				onload: function(response) {
					// We are done!
					XKit.interface.kitty.set(response.getResponseHeader("X-tumblr-kittens"));
					try {
						var mdata = jQuery.parseJSON(response.responseText);
					} catch(e) {
						//xkit_error(XKit.language.one_click_postage.status_error_title, XKit.language.generic_errors.not_json);
						XKit.extensions.one_click_postage.show_error("OCP09-J", state);
						$(m_button).removeClass("xkit-one-click-reblog-working");
						return;
					}
					if (mdata.errors === false) {
						$(m_button).removeClass("xkit-one-click-reblog-working");
						if (mdata.message === "" || typeof mdata.message === "undefined") {
						/*	if (state === 0) { XKit.notifications.add(XKit.language.one_click_postage.status_ok_reblogged, "ok"); }
							if (state === 1) { XKit.notifications.add(XKit.language.one_click_postage.status_ok_drafted, "ok"); }
							if (state === 2) { XKit.notifications.add(XKit.language.one_click_postage.status_ok_queued, "ok"); } */
						} else {


							if (XKit.extensions.one_click_postage.preferences.enable_alreadyreblogged.value === true) {
								XKit.extensions.one_click_postage.add_to_alreadyreblogged(root_id);
							}
							if (XKit.extensions.one_click_postage.preferences.enable_alreadyreblogged.value === true ||XKit.extensions.one_click_postage.preferences.dim_posts_after_reblog.value === true) {
								if (quick_queue_mode !== true) {
									$(m_button).addClass("xkit-one-click-reblog-done");
								} else {
									XKit.interface.switch_control_button($(m_button), false);
									XKit.interface.completed_control_button($(m_button), true);
								}
							}
							if (XKit.extensions.one_click_postage.preferences.dont_show_notifications.value !== true) {
								XKit.notifications.add(mdata.message, "ok");
							}
						}
					} else {
						// xkit_error(XKit.language.one_click_postage.status_error_title, XKit.language.generic_errors.server_error);
						var m_error = "Unknown error at svc/post/update";
						if (typeof mdata.error !== "undefined") {
							m_error = mdata.error;
						}
						XKit.extensions.one_click_postage.show_error("OCP10", state);
						$(m_button).removeClass("xkit-one-click-reblog-working");
					}
				}
			});

		});

	},

	add_to_alreadyreblogged: function(post_id) {

		if (XKit.extensions.one_click_postage.already_reblogged.indexOf(post_id) === -1) {
			XKit.extensions.one_click_postage.already_reblogged.push(post_id);
			XKit.extensions.one_click_postage.save_alreadyreblogged();
		}

	},

	is_alreadyreblogged: function(post_id) {

		if (XKit.extensions.one_click_postage.already_reblogged.indexOf(post_id) === -1) {
			return false;
		} else {
			return true;
		}

	},

	save_alreadyreblogged: function() {

		var limit_count = XKit.extensions.one_click_postage.preferences.already_reblogged_limit.value;

		var limit = 3000;

		try {
			limit = parseInt(limit_count.substring(1));
		} catch(e) {
			//alert("NO");
		}

		if (XKit.extensions.one_click_postage.already_reblogged.length >= limit) {
			// Drop 20 posts.
			while (XKit.extensions.one_click_postage.already_reblogged.length >= limit) {
				XKit.extensions.one_click_postage.already_reblogged.shift();
			}
		}

		console.log("already_reblogged length is " + XKit.extensions.one_click_postage.already_reblogged.length);
		XKit.storage.set("one_click_postage","already_reblogged", JSON.stringify(XKit.extensions.one_click_postage.already_reblogged));

	},

	show_error: function(code, state) {

		var m_word = "reblog";
		if (state === 1) { m_word = "draft"; }
		if (state === 2) { m_word = "queue"; }

		var m_causes =	"<ul class=\"xkit-one-click-postage-error-list\">" +
					"<li><b>You have used your daily post limit. (<a href=\"#\">more information</a>)</b><br/>The limit is 250 per day, set by Tumblr. Try again in 24 hours.<br/>This affects the queue too, and can't be circumvented.</li>" +
					"<li><b>You've filled up your queue.</b><br/>You can not queue more than 300 posts.</li>" +
					"<li><b>The post is deleted.</b><br/>The post you are trying to " + m_word + " is deleted by the user.</li>" +
					"<li><b>Your browser settings are denying XKit cookies.</b><br/>If you have disabled \"Third Party Cookies\", One-Click Postage can not work properly. Please enable them and try again.</li>" +
					"<li><b>There was a server error / change.</b><br/>Wait for a while and retry the " + m_word + " request.<br/>Check the XKit blog for updates.</li>" +
				"</ul>";

		if (state === 2 && XKit.interface.user().queue >= 299) {
			m_causes = "<ul class=\"xkit-one-click-postage-error-list\">" +
					"<li><b>You've filled your queue.</b><br/>You can not queue more than 300 posts.</li>" +
				"</ul>";
		}

		if (code === "666") {

			XKit.window.show("I could not " + m_word + " your post.","You need XKit <b>7.3.0</b> or higher for One-Click Postage to work.<br/>You currently have XKit <b>" + XKit.version + "</b> installed.<br/><br/>Please <a target=\"_BLANK\" href=\"http://xkit.info/notes/upgrade.php\">click here</a> to learn how to update XKit.","error","<div class=\"xkit-button default\" id=\"xkit-close-message\">OK</div><a href=\"http://xkit-extension.tumblr.com/\" class=\"xkit-button\">Visit the XKit Blog</a>");
			return;

		}

		XKit.window.show("I could not " + m_word + " your post.","<b>One of the following might be the reason for that:</b>" + m_causes + "<small>Error Code: <b>" + code + "</b>.</small>","error","<div class=\"xkit-button default\" id=\"xkit-close-message\">OK</div><a href=\"http://xkit-extension.tumblr.com/\" class=\"xkit-button\">Visit the XKit Blog</a><a href=\"http://xkit-extension.tumblr.com/ask\" class=\"xkit-button\">Send an ask</a>");

	}

});