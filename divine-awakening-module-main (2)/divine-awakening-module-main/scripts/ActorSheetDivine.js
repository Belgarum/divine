class ActorSheetDivine extends ActorSheet {
    static get defaultOptions() {
      return mergeObject(super.defaultOptions, {
        classes: ["divine-awakening", "sheet", "divine"],
        template: "templates/character-sheet.html",
        width: 800,
        height: 600,
        tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "character" }]
      });
    }
  
    getData() {
      const data = super.getData();
      data.templates = {
        character: "templates/character-sheet.html",
        challenge: "templates/divine-challenge.html"
      };
      // Additional data processing for the divine sheet
      return data;
    }
  }