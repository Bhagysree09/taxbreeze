import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function ITRPromoDialog() {
  const STORAGE_KEY = 'tb_seen_itr_promo_v1'
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      const force = url.searchParams.get('promo') === 'show'
      const seen = window.localStorage.getItem(STORAGE_KEY)
      // show in dev or when forced, otherwise show if not seen
      const isDev = typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.DEV
      if (isDev || force || !seen) {
        const t = setTimeout(() => setOpen(true), 600)
        return () => clearTimeout(t)
      }
    } catch (e) {
      // ignore localStorage errors
      setTimeout(() => setOpen(true), 600)
    }
  }, [])

  function handleClose() {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch (e) {
      // ignore
    }
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleClose(); setOpen(val); }}>
      {/* Trigger kept for a11y - hidden */}
      <DialogTrigger asChild>
        <button style={{display: 'none'}} aria-hidden />
      </DialogTrigger>
      <DialogContent className="p-4 sm:p-6">
        {/* Close icon in header for clarity on small screens */}
        <DialogClose>
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
          <div className="sm:col-span-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591021168650-2b8b1f3e6a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=640"
              alt="ITR Promo"
              className="w-full h-32 sm:h-40 rounded-md object-cover"
            />
          </div>

          <div className="sm:col-span-2">
            <DialogHeader>
              <div className="flex items-start justify-between">
                <div>
                  <DialogTitle>ITR Filing — Limited Time Offer</DialogTitle>
                  <DialogDescription>Get hassle-free ITR filing starting at just ₹199. Offer valid for new customers.</DialogDescription>
                </div>
                {/* explicit cross for accessibility */}
                <div className="sm:hidden">
                  <DialogClose>
                    <X className="w-5 h-5 text-muted-foreground" />
                  </DialogClose>
                </div>
              </div>
            </DialogHeader>

            <div className="py-4">
              <p className="text-sm text-muted-foreground">Our experts will file your income tax return quickly and accurately. Includes basic review and e-filing support.</p>
            </div>

            <DialogFooter>
              <Link to="/tax-filing">
                <Button className="bg-gradient-to-r from-[#6A23F5] to-[#A855F7] text-white">Avail Offer</Button>
              </Link>
              <Button variant="outline" onClick={handleClose}>Maybe later</Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}



