import Swal from 'sweetalert2'

export const CopyToClipBoard = () => {
    const copyUrl = (url) => {
        navigator.clipboard.writeText(url)
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Url copied to clipboard!',
            showConfirmButton: false,
            background: "#18181b",
            timer: 1500
        })
    }
    return {
        copyUrl
    }
}
