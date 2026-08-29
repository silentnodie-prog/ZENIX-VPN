/* =========================================================
   ZENIX VPN HUB - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.getElementById("mainNav");

    if (menuButton && mainNav) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mainNav.classList.toggle("active");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       VPN DOWNLOAD DEMO
       ===================================================== */

    document.querySelectorAll(".download-button").forEach(
        button => {

            button.addEventListener("click", () => {

                const fileName =
                    button.dataset.file ||
                    "VPN configuration";

                alert(
                    `${fileName}\n\n` +
                    "This is currently a demo download. " +
                    "Real authorized configuration files " +
                    "will be connected through the backend."
                );

            });

        }
    );


    /* =====================================================
       BASE64 ENCODER
       ===================================================== */

    const base64Input =
        document.getElementById("base64Input");

    const base64Output =
        document.getElementById("base64Output");

    const base64Encode =
        document.getElementById("base64Encode");

    const base64Decode =
        document.getElementById("base64Decode");


    if (
        base64Input &&
        base64Output &&
        base64Encode &&
        base64Decode
    ) {

        base64Encode.addEventListener("click", () => {

            try {

                const text = base64Input.value;

                base64Output.value =
                    btoa(
                        unescape(
                            encodeURIComponent(text)
                        )
                    );

            } catch (error) {

                base64Output.value =
                    "Unable to encode this text.";

            }

        });


        base64Decode.addEventListener("click", () => {

            try {

                const encoded =
                    base64Input.value.trim();

                base64Output.value =
                    decodeURIComponent(
                        escape(
                            atob(encoded)
                        )
                    );

            } catch (error) {

                base64Output.value =
                    "Invalid Base64 input.";

            }

        });

    }


    /* =====================================================
       URL ENCODER
       ===================================================== */

    const urlInput =
        document.getElementById("urlInput");

    const urlOutput =
        document.getElementById("urlOutput");

    const urlEncode =
        document.getElementById("urlEncode");

    const urlDecode =
        document.getElementById("urlDecode");


    if (
        urlInput &&
        urlOutput &&
        urlEncode &&
        urlDecode
    ) {

        urlEncode.addEventListener("click", () => {

            urlOutput.value =
                encodeURIComponent(
                    urlInput.value
                );

        });


        urlDecode.addEventListener("click", () => {

            try {

                urlOutput.value =
                    decodeURIComponent(
                        urlInput.value
                    );

            } catch (error) {

                urlOutput.value =
                    "Invalid encoded URL/text.";

            }

        });

    }


    /* =====================================================
       JSON FORMATTER
       ===================================================== */

    const jsonInput =
        document.getElementById("jsonInput");

    const jsonOutput =
        document.getElementById("jsonOutput");

    const jsonFormat =
        document.getElementById("jsonFormat");


    if (
        jsonInput &&
        jsonOutput &&
        jsonFormat
    ) {

        jsonFormat.addEventListener("click", () => {

            try {

                const parsed =
                    JSON.parse(
                        jsonInput.value
                    );

                jsonOutput.value =
                    JSON.stringify(
                        parsed,
                        null,
                        4
                    );

            } catch (error) {

                jsonOutput.value =
                    "Invalid JSON.";

            }

        });

    }


    /* =====================================================
       PASSWORD GENERATOR
       ===================================================== */

    const generatePassword =
        document.getElementById(
            "generatePassword"
        );

    const generatedPassword =
        document.getElementById(
            "generatedPassword"
        );


    if (
        generatePassword &&
        generatedPassword
    ) {

        generatePassword.addEventListener(
            "click",
            () => {

                const characters =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                    "abcdefghijklmnopqrstuvwxyz" +
                    "0123456789!@#$%^&*";

                let password = "";

                for (
                    let i = 0;
                    i < 16;
                    i++
                ) {

                    const randomIndex =
                        Math.floor(
                            Math.random() *
                            characters.length
                        );

                    password +=
                        characters[randomIndex];

                }

                generatedPassword.textContent =
                    password;

            }
        );

    }


    /* =====================================================
       CONFIGURATION VALIDATOR
       ===================================================== */

    const configInput =
        document.getElementById(
            "configInput"
        );

    const validateConfig =
        document.getElementById(
            "validateConfig"
        );

    const configResult =
        document.getElementById(
            "configResult"
        );


    if (
        configInput &&
        validateConfig &&
        configResult
    ) {

        validateConfig.addEventListener(
            "click",
            () => {

                const config =
                    configInput.value.trim();


                if (!config) {

                    configResult.textContent =
                        "Please paste configuration text first.";

                    return;

                }


                const lowerConfig =
                    config.toLowerCase();


                const keywords = [
                    "host",
                    "server",
                    "port",
                    "protocol",
                    "dns",
                    "udp",
                    "tcp",
                    "ssh",
                    "wireguard",
                    "openvpn"
                ];


                const found =
                    keywords.filter(
                        keyword =>
                            lowerConfig.includes(
                                keyword
                            )
                    );


                if (found.length >= 2) {

                    configResult.textContent =
                        "✓ Configuration contains recognizable network fields.";

                } else {

                    configResult.textContent =
                        "⚠ Configuration could not be confidently recognized. Check the format.";

                }

            }
        );

    }


    /* =====================================================
       QR CODE PREVIEW
       ===================================================== */

    const qrInput =
        document.getElementById("qrInput");

    const qrGenerate =
        document.getElementById("qrGenerate");

    const qrResult =
        document.getElementById("qrResult");


    if (
        qrInput &&
        qrGenerate &&
        qrResult
    ) {

        qrGenerate.addEventListener(
            "click",
            () => {

                const value =
                    qrInput.value.trim();


                if (!value) {

                    qrResult.textContent =
                        "Enter text or a URL first.";

                    return;

                }


                qrResult.innerHTML = "";

                const message =
                    document.createElement("p");

                message.textContent =
                    "QR data prepared:";


                const data =
                    document.createElement("code");

                data.textContent =
                    value;


                qrResult.appendChild(message);

                qrResult.appendChild(data);

            }
        );

    }


    /* =====================================================
       REGISTER FORM DEMO
       ===================================================== */

    const registerForm =
        document.getElementById(
            "registerForm"
        );

    const registerMessage =
        document.getElementById(
            "registerMessage"
        );


    if (
        registerForm &&
        registerMessage
    ) {

        registerForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const password =
                    document.getElementById(
                        "password"
                    ).value;

                const confirmPassword =
                    document.getElementById(
                        "confirmPassword"
                    ).value;


                if (
                    password !==
                    confirmPassword
                ) {

                    registerMessage.textContent =
                        "Passwords do not match.";

                    return;

                }


                registerMessage.textContent =
                    "Demo only: your account will be created after the secure backend is connected.";

            }
        );

    }


    /* =====================================================
       LOGIN FORM DEMO
       ===================================================== */

    const loginForm =
        document.getElementById(
            "loginForm"
        );

    const loginMessage =
        document.getElementById(
            "loginMessage"
        );


    if (
        loginForm &&
        loginMessage
    ) {

        loginForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                loginMessage.textContent =
                    "Demo only: real login will be connected to the secure authentication backend.";

            }
        );

    }

});