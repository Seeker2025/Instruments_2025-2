function closeMadal(evt){
    if(evt.code === 'Escape'){
      this.close();
    }
}

export { closeMadal };