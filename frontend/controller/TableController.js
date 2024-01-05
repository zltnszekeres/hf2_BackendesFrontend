import FormView from "../view/FormView.js";
import TableView from "../view/table/TableView.js";

export default class TableController {
  constructor(ds, parent, descriptor) {
    this.ds = ds;

    this.ds.getData("songs", (data) => {
      this.show(data, parent, descriptor);
    });

    $(window).on("deleteRow", (e) => {
      this.ds.delData("songs", e.detail.id, (data) => {
        this.show(data, parent, descriptor);
      });
    });

    $(window).on("postSubmit", (e) => {
      this.ds.postData(e.detail, "songs", (data) => {
        this.show(data, parent, descriptor);
      });
    });
    $(window).on("modify", (e) => {
      // $(window).off("postSubmit");
      let endPoint = "songs/" + e.detail.id;
      this.ds.getData(endPoint, (data) => {
        let form = new FormView($(".urlap"), descriptor);
        form.modifyThis(data, descriptor);
        $(window).on("putSubmit", (e) => {
          this.ds.putData(e.detail, "songs", e.detail.id, (data) => {
            this.show(data, parent, descriptor);
          });
        });
      });
    });
  }

  show(list, parent, descriptor) {
    let form = new TableView(list, parent, descriptor);
    return form;
  }
  errorMessage(error) {
    console.log("Error message: ", error);
  }
}