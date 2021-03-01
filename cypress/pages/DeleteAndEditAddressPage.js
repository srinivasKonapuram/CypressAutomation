import verificationHelper from '../utils/VerificationHelper' 
class DeleteAndEditAddress {
    static editingMessage = ".container h2";
    static deleteMessage=".container div"
    validateEdit(textToMatch){
        verificationHelper.validateTheFormDetails(DeleteAndEditAddress.editingMessage, textToMatch)
    }
    validateDelete(textToMatch){
        verificationHelper.validateTheFormDetails(DeleteAndEditAddress.deleteMessage, textToMatch)
    }
}
const addressEditAndDeletions = new DeleteAndEditAddress()
export default addressEditAndDeletions;