import React from 'react'

export default function Newsletter() {
    return (
        <section className="">
            <form action="">
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <p className="pt-2">
                            <strong>Enregistrez vous pour recevoir nos newletters !</strong>
                        </p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="form-outline form-white mb-4">
                            <input placeholder="Adresse mail" type="email" id="form5Example2" name="form5Example2" className="form-control" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-outline-light mb-4">Enregistrer</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
