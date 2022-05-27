import frappe

@frappe.whitelist(allow_guest=True)
def create_contact(**args):
    # business logic
    print(args)
    doc = frappe.new_doc('Contacts')
    doc.contact_name = args['cname']
    doc.mobile = args['cmobile']
    doc.email = args['cemail']
    doc.subject = args['csubject']
    doc.message = args['cmessage']
    print("hhhhhhhhhh",doc)

    doc.insert()
    print("gggggggggg",doc)


    return True