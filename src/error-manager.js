class Error { constructor(source, description) { this.source = source; this.description = description; } }

const errorManager = {
    log: [],
    new: (source, description, ...otherInfo) => {
        let error = new Error(source, description);
        for(let i = 0; i < otherInfo.length; i++){
            error['other_info_' + i] = otherInfo[i];
        }

        let errorMessage = "Error:\n";
        for(const [key, value] of Object.entries(error)){
            if(value !== undefined) errorMessage += ` ${key}: ${value}\n`;
        }
        console.log(errorMessage);
        
        errorManager.log.push(error);
    },
    getLog: () => { return log },
}
export default errorManager;