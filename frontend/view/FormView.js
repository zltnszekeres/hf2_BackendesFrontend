export default class FormView {
    #formData = {};
  
    constructor(parent, desc) {
      this.formTheme =
        "<form class='align-items-center m-auto bg-transparent' id='form'></form>";
      this.parent = parent;
      this.parent.html(this.formTheme);
      this.formElem = parent.find("form");
      this.formElem.html("");
      this.makeHTML(desc);
      this.submitElem = this.formElem.find("#submit");
      this.getInfoForm();
    }
  
    makeHTML(desc) {
      let txt = "";
      for (const k in desc) {
        const e = desc[k];
        switch (e.type) {
          case "id":
            txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" readonly style="visibility: hidden"/></div>`;
            break;
          case "text":
            txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" placeholder="${e.placeholder}"/></div>`;
            break;
          case "date":
                txt += `<div class="mb-4 m-auto"><input id="${e.id}" class="${e.class}" placeholder="${e.placeholder}"/></div>`;
            break;
              
            
        }
      }
      txt += `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`;
      this.formElem.append(txt);
    }
  
    getInfoForm() {
      this.idElem = this.formElem.find("#id");
      this.submitElem = this.formElem.find("#submit");
      this.titleElem = this.formElem.find("#title");
      this.nameElem = this.formElem.find("#name");
      this.dateElem = this.formElem.find("date");
      this.submitElem.on("click", (event) => {
        event.preventDefault();
        this.#formData.id = this.idElem.val();
        this.#formData.title = this.titleElem.val();
        this.#formData.name = this.nameElem.val();
        this.#formData.date = this.dateElem.val();
  
        if(this.#formData.id){
          console.log("put")
          this.trigger("putSubmit")
        }else{
          console.log("post")
          this.trigger("postSubmit");
        }
  
      });
    }
  
    trigger(e) {
      const event = new CustomEvent(e, { detail: this.#formData });
      window.dispatchEvent(event);
    }
  
    // e - element
    modifyThis(e, desc) {
      this.formElem.find("#id").css("visibility", "visible");
      this.formElem.find("#id").val(e.id);
      this.formElem.find("#title").val(e.title);
      this.formElem.find("#name").val(e.name);
      this.formElem.find("#date").val(e.date);
      this.formElem
        .find("#evaluation")
        .append(
          `<div class="m-auto w-50"><button id="submit" class="btn btn-success w-100">Küld</button></div>`
        );
      $("html").animate({ scrollTop: $("#form").offset().top }, 800);
      this.getInfoForm();
    }
  }