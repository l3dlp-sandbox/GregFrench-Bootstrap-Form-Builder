export default {
    "header": {
        name: "header",
        label: "Header",
        type: "header",
        tagname: "h1",
        textalign: "text-left",
        subfields: []
    },
    "name": {
        name: "name",
        label: "Name",
        type: "name",
        subfields: [
            {
                name: "prefix",
                label: "Prefix",
                label_display: "Prefix",
                type: "prefix",
                placeholder: "prefix",
                active: 0
            },
            {
                name: "first_name",
                label: "First Name",
                label_display: "First Name",
                type: "first_name",
                placeholder: "first name",
                active: 1
            },
            {
                name: "middle_name",
                label: "Middle Name",
                label_display: "Middle Name",
                type: "middle_name",
                placeholder: "middle name",
                active: 0
            },
            {
                name: "last_name",
                label: "Last Name",
                label_display: "Last Name",
                type: "last_name",
                placeholder: "last name",
                active: 1
            },
            {
                name: "suffix",
                label: "Suffix",
                label_display: "Suffix",
                type: "suffix",
                placeholder: "suffix",
                active: 0
            }
        ]
    },
    "email": {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "email",
        tagname: "input",
        subfields: []
    },
    "address": {
        name: "address",
        label: "Address",
        type: "address",
        subfields: [
            {
                name: "street_address",
                label: "Street Address",
                label_display: "Street Address",
                type: "street_address",
                placeholder: "street address",
                active: 1
            },
            {
                name: "street_address_line_2",
                label: "Street Address Line 2",
                label_display: "Street Address Line 2",
                type: "street_address_line_2",
                placeholder: "street address line 2",
                active: 1
            },
            {
                name: "city",
                label: "City",
                label_display: "City",
                type: "city",
                placeholder: "city",
                active: 1
            },
            {
                name: "state",
                label: "State",
                label_display: "State",
                type: "state",
                placeholder: "state",
                active: 1
            },
            {
                name: "zip_code",
                label: "Zip Code",
                label_display: "Zip Code",
                type: "zip_code",
                placeholder: "zip code",
                active: 1
            },
            {
                name: "country",
                label: "Country",
                label_display: "Country",
                type: "country",
                placeholder: "country",
                active: 1
            }
        ]
    },
    "input": {
        name: "input",
        label: "Input",
        type: "text",
        tagname: "input",
        subfields: []
    },
    "textarea": {
        name: "textarea",
        label: "Textarea",
        type: "textarea",
        tagname: "textarea",
        subfields: []
    },
    "checkboxes": {
        name: "checkboxes",
        label: "Checkboxes",
        type: "checkboxes",
        tagname: "input",
        options: "Option 1\nOption 2\nOption 3",
        subfields: []
    },
    "radio_buttons": {
        name: "radio_buttons",
        label: "Radio Buttons",
        type: "radio_buttons",
        tagname: "input",
        options: "Option 1\nOption 2\nOption 3",
        subfields: []
    },
    "select": {
        name: "select",
        label: "Select",
        type: "select",
        tagname: "select",
        options: "Option 1\nOption 2\nOption 3",
        subfields: []
    }
}