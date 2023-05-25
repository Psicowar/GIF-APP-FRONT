import Swal from 'sweetalert2'

export const CopyToClipBoard = () => {
    const copyUrl = (url) => {
        navigator.clipboard.writeText(url)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Url copied to clipboard!',
            showConfirmButton: false,
            background: "#1b1e2a",
            timer: 1500
        })
    }
    return {
        copyUrl
    }
}
