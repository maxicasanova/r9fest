import { Box, Button, Typography } from '@mui/material'

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Legal() {

    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent: 'center',
            gap:'20px',
            mt:'20px',
            padding:'0 20px',
            backgroundColor:'#121212'
        }}>
            <Button onClick={()=>{navigate('/')}} variant='contained' sx={{backgroundColor:'#FFCE41'}}>Volver</Button>
            <Typography>
                POLÍTICA DE PRIVACIDAD Y
                PROTECCIÓN DE DATOS PERSONALES
                DEL SITIO DE INTERNET
            </Typography>
            <Typography>
                https://r9producciones17s.firebaseapp.com/
            </Typography>
            <Typography>
                CLÁUSULA (1). Definiciones 
                Acceder: una o más acciones del Usuario necesarias: tratándose del Sitio, para el Acceso del Sitio; o, tratándose de un Sitio de Tercero, para abrir conforme al protocolo de Internet denominado Hypertext Transfer Protocol (HTTP) o al protocolo de Internet denominado Hypertext Transfer Protocol Secure (HTTPS) una o más conexiones HTTP o HTTPS, respectivamente, entre la dirección de Internet de dicho Sitio de Tercero y la dirección de Internet de un dispositivo utilizado por el Usuario para abrir cada dicha conexión.
                Acceso del Sitio: la apertura conforme al protocolo de Internet denominado Hypertext Transfer Protocol (HTTP) o al protocolo de Internet denominado Hypertext Transfer Protocol Secure (HTTPS) de una o más conexiones HTTP o HTTPS, respectivamente, entre la dirección de Internet del Sitio y la dirección de Internet de un dispositivo utilizado por el Usuario para abrir cada dicha conexión.
                Actividad en el Sitio: la utilización por el Usuario de una o más funcionalidades incluidas y habilitadas en el Sitio.
                Administrador: la siguiente persona humana: Patricio Rovaletti, con DNI 31886612 y CUIT 20-31886612-1, y con correo electrónico en provaletti@r9producciones.com.
                Autoridad Pública: cualquier órgano legislativo, ejecutivo o judicial de carácter nacional, provincial o municipal.
                Cookie: cada archivo digital que cumple los siguientes requisitos: (1) es creado por un sitio de Internet accedido por el Usuario por primera vez; (2) almacena uno o más datos sobre el Usuario (por ej., su identificación de acceso) y/o la actividad del Usuario en dicho sitio de Internet (por ej., las selecciones realizadas) con la finalidad de facilitar al Usuario el acceso a dicho sitio de Internet y la actividad en el mismo al menos por segunda vez; (3) es almacenado por el navegador web que el Usuario utilizó para acceder a dicho sitio de Internet por primera vez; y (4) puede ser leído solamente o leído y modificado por dicho sitio de Internet si el Usuario vuelve a acceder a dicho sitio de Internet utilizando el mismo navegador web al menos por segunda vez.
                Credencial de Seguridad: uno o más Datos Personales y/u otros datos u otra información suministrados por una persona humana, por sí misma o por intermedio de un programa informático no autorizado previa y expresamente por el Administrador, para otorgar a dicha persona humana una identidad única e inequívoca como Usuario.
                Dato Personal: cada dato de propiedad del Usuario (incluyendo, sin limitación, cada dato sobre el dispositivo utilizado por el Usuario para Acceder al Sitio -modelo, sistema operativo, conexión, etc.- y la ubicación geográfica del Usuario durante la Permanencia en el Sitio) que cumple los siguientes requisitos: (1) conforme a la Ley 25326 no está prohibido al Administrador recolectarlo del Usuario conforme a la Cláusula Recolección de Datos Personales; y (2) no es de conocimiento público al momento en que el Administrador lo recolecta del Usuario conforme a la Cláusula Recolección de Datos Personales.
                Ley 25326: la Ley N° 25.326 y el Decreto N° 1558/2001 del Poder Ejecutivo nacional.
                Permanecer en el Sitio: una o más acciones del Usuario, en el Sitio y conforme a los TyC, necesarias para prolongar la Permanencia en el Sitio.
                Permanencia en el Sitio: el tiempo que transcurriere desde, e incluyendo, el Acceso del Sitio hasta, e incluyendo, la Salida del Sitio.
                Propietario: el Administrador.
                Salida del Sitio: el cierre conforme al protocolo de Internet denominado Hypertext Transfer Protocol (HTTP) o al protocolo de Internet denominado Hypertext Transfer Protocol Secure (HTTPS) de la única o la última, según el caso, conexión HTTP o HTTPS, respectivamente, abierta por el Acceso del Sitio.
                Sitio: cada archivo digital vacío o conteniendo uno o más textos (originales o reproducciones autorizadas), imágenes, videos, sonidos, gráficos, iconos, logotipos, isotipos, marcas, dibujos, emblemas, combinaciones de colores, combinación de letras y números, frases publicitarias u otro contenido digital o digitalizado (distinto de instrucciones de programa informático) y cada archivo de programa informático (ya sea que utilice uno o más de los anteriores archivos digitales o no) directa o indirectamente asociado por el Administrador con la dirección de Internet a la que corresponde el siguiente nombre de dominio:
                https://r9producciones17s.firebaseapp.com/
                Sitio de Tercero: cada dirección de Internet distinta del Sitio.
                TyC: los términos y condiciones del Sitio publicados en la sección "Términos y Condiciones" (https://r9producciones17s.firebaseapp.com/legal) del Sitio.
                Usuario: cada persona humana que Accede al Sitio, Permanece en el Sitio y realiza la Actividad en el Sitio, por sí misma o por intermedio de un programa informático no autorizado previa y expresamente por el Administrador, y cada Usuario Necesario; estipulándose que la Actividad en el Sitio realizada con Credencial de Seguridad se considerará realizada por la persona humana que suministró, por sí misma o por intermedio de un programa informático no autorizado previa y expresamente por el Administrador, dicha Credencial de Seguridad.
                Usuario Necesario: cada persona humana que es titular o delegada de la responsabilidad parental o representante necesaria, según el caso, de otra persona humana que Accede al Sitio, por sí misma o por intermedio de un programa informático no autorizado previa y expresamente por el Administrador, y no tiene 18 (dieciocho) años de edad cumplidos y no está emancipado por matrimonio o por otra causa no goza de capacidad civil para Acceder al Sitio, Permanecer en el Sitio y realizar la Actividad en el Sitio cumpliendo los TyC.
            </Typography>
            <Typography>
                CLÁUSULA (2). Desarrollo del Sitio
                (a) El Sitio ha sido desarrollado con respeto por la privacidad del Usuario en Internet y considerando el deber del Administrador de proteger, conforme a la Ley 25326, cualesquiera Datos Personales que el Usuario transmitiere al Sitio en relación con el Acceso del Sitio, la Permanencia en el Sitio, la Actividad en el Sitio y la Salida del Sitio.
                (b) La presente Política de Privacidad y Protección de Datos Personales es parte de los TyC y debe ser leída e interpretada en conjunto con los TyC.
                </Typography>
            <Typography>
                CLÁUSULA (3). Recolección de Datos Personales
                Cada Acceso del Sitio automáticamente representa para el Usuario su consentimiento sin condiciones para que el Administrador pueda recolectar, en el Sitio y/o por correo electrónico recibido del Usuario, uno o más Datos Personales con las siguientes finalidades salvo indicación expresa en contrario del Administrador en el Sitio y/o por correo electrónico enviado al Usuario:
                (a) mejorar la interacción entre el Usuario y el Sitio durante la Permanencia en el Sitio; y
                (b) elaborar estadísticas anónimas (es decir, no susceptibles de posibilitar la identificación del Usuario) del Sitio; y
                (c) cumplir una orden de una Autoridad Pública recibida por el Administrador.
                </Typography>
            <Typography>
                CLÁUSULA (4). Cookies
                El Administrador deberá obtener del Usuario, en el Sitio y/o por correo electrónico recibido del Usuario, el consentimiento sin condiciones del Usuario para guardar una o más Cookies del Sitio en el dispositivo utilizado por el Usuario para Acceder al Sitio y utilizar dichas Cookies del Sitio antes de guardar éstas en dicho dispositivo.
                </Typography>
            <Typography>
                CLÁUSULA (5). Negativa del Usuario
                El Usuario:
                (a) podrá en cualquier momento durante la Permanencia en el Sitio comunicar al Administrador en el Sitio su negativa sin condiciones a:
                (I) suministrar uno o más Datos Personales al Administrador conforme a la Cláusula Recolección de Datos Personales; y/o
                (II) permitir el almacenamiento y la utilización de una o más Cookies del Sitio conforme a la Cláusula Cookies; y
                (b) reconoce y acepta que la interacción entre el Usuario y el Sitio durante la Permanencia en el Sitio podría ser menos satisfactoria (cuantitativa y/o cualitativamente) que lo sería por el contrario si:
                (I) comunicare una negativa conforme al apartado (a); o
                (II) suministrare Datos Personales incompletos, inexactos o falsos a los fines de la Cláusula Recolección de Datos Personales.
                </Typography>
            <Typography>
                CLÁUSULA (6). Almacenamiento de Datos Personales
                El Administrador almacenará los Datos Personales en una base de datos cuya administración será responsabilidad exclusiva del Administrador en el siguiente domicilio: Av Avellaneda 837, San Miguel de Tucumán, Dpto. Capital, Provincia de Tucumán.
                </Typography>
            <Typography>
                CLÁUSULA (7). Gestión de Datos Personales
                Los Datos Personales que el Administrador recolectare conforme a la Cláusula Recolección de Datos Personales podrán ser almacenados, procesados y transferidos exclusivamente por:
                (a) el Administrador; y
                (b) cada persona humana o jurídica con la que el Administrador celebrare un contrato de transferencia o cesión de uno o más Datos Personales; y
                (c) cada Autoridad Pública que requiriere al Administrador la transferencia o cesión de uno o más Datos Personales por resolución judicial y cuando medien razones fundadas relativas a la seguridad pública, la defensa nacional o la salud pública.
                </Typography>
            <Typography>
                CLÁUSULA (8). Derechos del Usuario
                (a) Conforme a la Ley 25326 el Usuario podrá solicitar al Administrador respecto de uno o más Datos Personales:
                (I) el acceso gratuito a dichos Datos Personales cada 6 o más meses aniversario continuos desde la fecha del último acceso solicitado por el Usuario salvo que demostrare tener un interés legítimo en acceder a dichos Datos Personales antes del transcurso de 6 meses aniversario continuos desde la fecha del último acceso solicitado por el Usuario; y/o
                (II) la actualización de dichos Datos Personales si hubieran perdido vigencia por haber cambiado las circunstancias del Usuario; y/o
                (III) la rectificación de dichos Datos Personales si fueren inexactos o estuvieren incompletos; y/o
                (IV) el bloqueo de dichos Datos Personales; o
                (V) la supresión de dichos Datos Personales.
                (b) Cada solicitud del Usuario conforme al apartado (a) deberá ser efectuada mediante:
                (I) una carta documento si el Usuario solicitare acceder a uno o más Datos Personales; o
                (II) una carta simple, acompañada de una fotocopia simple de su Documento Nacional de Identidad o Pasaporte vigente, si el Usuario solicitare la actualización, la rectificación, el bloqueo o la supresión de uno o más Datos Personales.
                (c) El Usuario deberá entregar o causar que se entregue la comunicación correspondiente según el apartado (b) únicamente en el domicilio del Administrador indicado en la Cláusula Almacenamiento de Datos Personales.
                (d) El correo electrónico del Administrador indicado en la Cláusula Definiciones no es un domicilio electrónico y, en consecuencia, cualquier correo electrónico conteniendo o adjuntando una notificación, una comunicación o un emplazamiento que se enviare a aquel correo electrónico no deberá considerarse enviado al Administrador ni recibido por el Administrador a ningún efecto de la notificación o comunicación o del emplazamiento de que se trate.
                (e) El Administrador:
                (I) no estará obligado a responder favorablemente:
                (1) una solicitud de acceso, rectificación y/o supresión de uno o más Datos Personales recibida del Usuario conforme al apartado (a) si el cumplimiento con la solicitud de que se trate afectare la protección de la defensa de la Nación, del orden y la seguridad públicos o de los derechos e intereses de terceros; o
                (2) una solicitud de acceso de uno o más Datos Personales recibida del Usuario conforme al apartado (a) sub-apartado (I) si dicha solicitud no estuviere fechada por lo menos 6 (seis) meses después de la fecha de la última solicitud de acceso de Datos Personales que el Administrador hubiera recibido del Usuario conforme al apartado (a) sub-apartado (I) salvo que el Usuario demostrare razonablemente al Administrador (a criterio exclusivo del Administrador) que tiene un interés legítimo para acceder a los Datos Personales de que se trate antes de transcurrir 6 (seis) meses desde de la fecha de aquella última solicitud de acceso; o
                (3) una solicitud de supresión de uno o más Datos Personales recibida del Usuario conforme al apartado (a) sub-apartado (V) si la supresión solicitada pudiere causar perjuicios a derechos o intereses legítimos de terceros o impidiere al Administrador cumplir una obligación legal de conservar los Datos Personales de que se trate; y
                (II) informará los fundamentos de cada negativa conforme al sub-apartado (I) mediante una comunicación escrita dirigida al domicilio que el Usuario hubiera informado en la solicitud rechazada de que se trate.
                (f) La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley 25326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de Datos Personales.
                </Typography>
            <Typography>
                CLÁUSULA (9). Modificaciones
                (a) El Administrador:
                (I) podrá a su exclusivo criterio, en cualquier momento y sin necesidad de dar aviso o explicación al Usuario en forma previa, simultánea o posterior, modificar, total o parcialmente, de manera temporaria o definitiva, esta Política de Privacidad y Protección de Datos Personales; y
                (II) sin perjuicio de lo dispuesto en el sub-apartado (I), podrá comunicar al Usuario, en el Sitio y/o por correo electrónico enviado al Usuario, en la oportunidad y durante el tiempo que en cada caso el Administrador determinare, una modificación, total o parcial, temporaria o definitiva, de esta Política de Privacidad y Protección de Datos Personales.
                (b) El Usuario:
                (I) no estará obligado a aceptar, total o parcialmente, ninguna modificación de esta Política de Privacidad y Protección de Datos Personales realizada por el Administrador; y
                (II) deberá manifestar expresamente, en el Sitio y/o por correo electrónico enviado al Administrador, en la oportunidad y durante el tiempo que en cada caso el Administrador determinare, haber leído, comprendido y aceptado sin condiciones y totalmente la modificación de esta Política de Privacidad y Protección de Datos Personales como requisito previo para Permanecer en el Sitio y/o realizar la Actividad en el Sitio; y
                (III) deberá abstenerse de Acceder al Sitio si no tuviere intención de cumplir con lo dispuesto en el sub-apartado (II); y
                (IV) no deberá Permanecer en el Sitio o realizar la Actividad en el Sitio si no hubiera cumplido con lo dispuesto en el sub-apartado (II).
                (c) A los fines de esta Cláusula la Política de Privacidad y Protección de Datos Personales es la publicada por el Administrador en el Sitio durante la Permanencia en el Sitio salvo indicación expresa en contrario del Administrador en el Sitio y/o por correo electrónico enviado al Usuario.
                </Typography>
            <Typography>
                CLÁUSULA (10). Sitio de Tercero
                Esta Política de Privacidad y Protección de Datos Personales no se aplica a ningún Sitio de Tercero ya sea antes del Acceso del Sitio, durante la Permanencia en el Sitio a partir del Acceso del Sitio de Tercero de que se trate mediante la utilización por el Usuario de uno o más enlaces a dicho Sitio de Tercero incluidos y habilitados en el Sitio para Acceder a dicho Sitio de Tercero o después de la Salida del Sitio.
                </Typography>
            <Typography>
                CLÁUSULA (11). Ley Aplicable
                Esta Política de Privacidad y Protección de Datos Personales se rige exclusivamente por la ley de la República Argentina.

            </Typography>
        </Box>
    )
}

export default Legal