const validateForm = (ime, prezime, email) => {
    if (!ime || !prezime || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return false;
    } else
        return true;
};

export default validateForm;