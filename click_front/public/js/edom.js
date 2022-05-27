let c_name = document.querySelector("#contact-name");
let mobile = document.querySelector("#contact-mobile");
let email = document.querySelector("#contact-email");
let subject = document.querySelector("#contact-subject");
let message = document.querySelector("#contact-message");
let contact_form = document.querySelector("#contact-click")
let contact_form_reset = document.querySelector("#contact-form")
let error_element = document.querySelector("#contact-error")

contact_form.addEventListener('click',(e)=>{
    let messages = []
    if(c_name.value === '' || c_name.value == null){
        document.querySelector("#error-name").innerHTML = "الاسم مطلوب"
        messages.push("الاسم مطلوب")
    }
    if(mobile.value === '' || mobile.value == null){
        document.querySelector("#error-mobile").innerHTML = "الجوال مطلوب"
        messages.push("الجوال مطلوب")
    }
    if(email.value === '' || email.value == null){
        document.querySelector("#error-email").innerHTML = "الايميل مطلوب"
        messages.push("الاسم مطلوب")

    }
    if(subject.value === '' || subject.value == null){
        document.querySelector("#error-subject").innerHTML = "الموضوع مطلوب"
        messages.push("الاسم مطلوب")

    }
    if(message.value === '' || message.value == null){
        document.querySelector("#error-message").innerHTML = "التفاصيل مطلوبة"
        messages.push("الاسم مطلوب")

    }
    if(messages.length>0){
        e.preventDefault();
        document.querySelector("#contact-error").classList.remove('hide');
        document.querySelector("#contact-success").classList.add('hide');
        error_element.innerHTML = 'الرجاء ملأ جميع الحقول المطلوبة'
    }else{
        document.querySelector("#contact-error").classList.add('hide');
        const cname = c_name.value;
        const cmobile = mobile.value;
        const cemail = email.value;
        const csubject = subject.value;
        const cmessage = message.value;
        frappe.call({
            method: "click_front.api.create_contact", //dotted path to server method
            args:{cname,cmobile,cemail,csubject,cmessage},
            success: function(r) {
                error_element.innerHTML = "";
                document.querySelector("#error-name").innerHTML = "";
                document.querySelector("#error-mobile").innerHTML = "";
                document.querySelector("#error-email").innerHTML = "";
                document.querySelector("#error-subject").innerHTML = "";
                document.querySelector("#error-message").innerHTML = "";
                contact_form_reset.reset();
                document.querySelector("#contact-success").classList.remove('hide');
                document.querySelector("#contact-success").innerHTML = "تم الارسال بنجاح ";
            },
            error: function(r) {{console.log("error");error_element.innerHTML = "لم يتم الارسال بنجاح"}},
        });
    }
})






