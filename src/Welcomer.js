const { Base } = require("discord-canvascard");
const Util = require("./Util");

class Welcomer extends Base {

    /**
     * Welcome image builder
     * @see https://www.discord-canvas.net/functions/welcome
     * @example
     * const card = new canvacard.Welcomer()
            .setUsername("SrGobi")
            .setDiscriminator("5100")
            .setGuildName("SrGobi Studio");

        card.build()
            .then(data => {
                canvacard.write(data, "welcomer.png");
            })
     */
    constructor() {
        super();
        
        /**
         * Título creado con Canvacard
         * @type {string}
         */
        this.textTitle = "WELCOME";

        /**
         * Mensaje de texto creado con Canvacard
         * @type {string}
         */
        this.textMessage = "Welcome to {server}";

        /**
         * Color del título creado con canvacard
         * @type {string}
         */
        this.colorTitle = "#03A9F4";
        
        // actualizar datos predeterminados
        this.__updateData();
    }

    /**
     * Actualiza el estado predeterminado
     * @private
     * @ignore
     */
    __updateData() {
        this.setUsername("Discord User");
        this.setDiscriminator("0000");
        this.setDescription("Descipción");
        this.setMemberCount(100);
        this.setGuildName("Discord Server");
        this.setAvatar(`https://cdn.discordapp.com/embed/avatars/0.png`);
        this.setBackground("COLOR", "#2c2f33" ||"IMAGE", `https://i.imgur.com/aClDVjh.jpg`);
        this.setOpacityBorder("0.4")
        this.setColorCircle("#FFFFFF")
        this.setColor("border", "#4D5E94");
        this.setColor("username-box", "#4D5E94");
        this.setColor("discriminator-box", "#4D5E94");
        this.setColor("message-box", "#4D5E94");
        this.setColor("title", "#4D5E94");
        this.setColor("avatar", "#4D5E94");
    }

    /**
     * Establecer color
     * @param {"title"|"title-border"|"avatar"|"username"|"username-box"|"hashtag"|"discriminator"|"discriminator-box"|"message"|"message-box"|"member-count"|"background"|"border"} id
     * @param {string} color Código de color HTML5
     * @returns {Welcomer}
     */
    setColor(id, color) {
        super.setColor(id, color);
        return this;
    }

    /**
     * Establecer recuento de miembros
     * @param {number|string} memberCount Recuento de miembros del gremio
     * @returns {Welcomer}
     */
    setMemberCount(memberCount = 100) {
        super.setMemberCount(Util.toAbbrev(memberCount));
        return this;
    }

    /**
     * Crea una imagen de bienvenida
     * @returns {Promise<Buffer>}
     */
    async build() {
        return (await this.toAttachment()).toBuffer();
    }

}

module.exports = Welcomer;